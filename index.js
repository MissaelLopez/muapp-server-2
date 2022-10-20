require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const connection = require("./db");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const cowRoutes = require("./routes/cow.routes");
const ranchRoutes = require("./routes/ranch.routes");

// Database connection
connection();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cows", cowRoutes);
app.use("/api/ranchs", ranchRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server started at port. ${port}`));
