import next from "next";
import serverless from "serverless-http";

const isDev = process.env.NODE_ENV !== "production";
const app = next({ dev: isDev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const express = require("express");
  const server = express();

  server.get("*", (req: any, res: any) => {
    return handle(req, res);
  });

  module.exports.handler = serverless(server);
});
