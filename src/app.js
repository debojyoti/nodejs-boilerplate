const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user-routes");
const errorHandler = require("./middlewares/error-handler");
const setupSwagger = require("./config/swagger");
const logger = require("./utils/logger");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/users", userRoutes);

app.use(errorHandler);

setupSwagger(app);

module.exports = app;
