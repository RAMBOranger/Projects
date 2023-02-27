const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/forgot", async (req, res) => {
  const { email } = req.body;

  const user = await Users.findOne({ where: { email: email } });

  if (!user) {
    res.json({ error: "User doesnt exist" });
  } else {
    const accessToken = sign(
      { email: user.email, id: user.id },
      "importantsecret"
    );
    res.json({ token: accessToken, email: email, id: user.id });
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
