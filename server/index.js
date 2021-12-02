import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

//prefix for posts
app.use("/", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// const CONNECTION_URL =
// "mongodb+srv://nem:nem123@cluster0.ranyp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.set("port", PORT);

app.listen(PORT, () => {
  console.log("Listening on port " + app.get("port"));
});

// mongoose
//   .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () =>
//       console.log(`Server Running on Port: http://localhost:${PORT}`)
//     )
//   )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
