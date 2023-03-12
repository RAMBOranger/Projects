
const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

const vendorRouter = require("./routes/Vendors");
app.use('/vendors', vendorRouter);

const serviceRouter = require("./routes/Services");
app.use("/services", serviceRouter);

const weddingRouter = require("./routes/Weddings");
app.use("/weddings", weddingRouter);

const invoiceRouter = require("./routes/Invoices");
app.use("/invoices", invoiceRouter);

db.sequelize.sync().then(() => {
  app.listen(3006, () => {
    console.log("Server running on port 3006");
  });
});
