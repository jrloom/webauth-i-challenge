const express = require("express");

const apiRouter = require("./apiRoutes");
const middleware = require("./middlewareConfig");

const server = express();

middleware(server);

server.use("/api", apiRouter);

module.exports = server;
