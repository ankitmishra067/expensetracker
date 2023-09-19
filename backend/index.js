import con from "./dbconnection";
import { Express } from "express";
import cors from 'cors';

const app = express();
app.use(cors());