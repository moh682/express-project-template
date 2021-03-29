import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "@configs/Config";

const server = express();

server.use(cors());

server.use(bodyParser.json());

server.listen(env.PORT, () => {
  console.log(`server is listening at port: ${env.PORT}`);
});
