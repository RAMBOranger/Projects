const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

const crypto = require("crypto");
const nodemailer = require("nodemailer");

router.post("/forgot", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 36000000; // 10 hour
    await user.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "apsiitm17@gmail.com",
        pass: "ogirdfbxbpqgcxhi",
      },
    });
    const mailOptions = {
      from: "apsiitm17@gmail.com",
      to: email,
      subject: "Reset your password",
      html: `<p>You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
        <p>Please click on the following link, or paste this into your browser to complete the process:</p>
        <p>http://localhost:3000/reset/${token}</p>
        <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ message: "Email not sent" });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ message: "Email sent" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

//<p>http://${req.headers.host}/reset/${token}</p>

router.put("/reset/:token", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        resetPasswordToken: req.params.token,
        // resetPasswordExpires: { $gt: Date.now() },
      },
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Password reset token is invalid or has expired" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();
    res
      .status(200)
      .json({ message: "Your password has been updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      email: email,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "User doesnt exist" });
  } else
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "wrong username and password combination" });
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "importantsecret"
        );
        res.json({ token: accessToken, username: username, id: user.id , role: user.role});
      }
    });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;