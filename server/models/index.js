import dbConfig from "../config/db.config.js";
import mongoose from "mongoose";
import tutorials from "./tutorial.model.js";
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = tutorials(mongoose);

export default db;
