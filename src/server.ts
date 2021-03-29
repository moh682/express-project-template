import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "@configs/Config";

const server = express();

server.use(cors());

server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send(
    `hi ${
      req.headers["x-forwarded-for"] || req.connection.remoteAddress
    }, this is Express Project Template`,
  );
});

server.listen(env.PORT, () => {
  console.log(`server is listening at port: ${env.PORT}`);
});

export default server;
