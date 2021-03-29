import * as dotenv from "dotenv";
import { IEnvironment } from "@interfaces/IEnvironment";

dotenv.config();

const ENV: IEnvironment = {
  ENVIRONMENT: process.env.ENVIRONMENT || "development",
  PORT: process.env.PORT ? Number(process.env.PORT) : 3000,
};

export default ENV;
