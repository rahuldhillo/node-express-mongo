import mongoose from "mongoose";

const Tutorial = mongoose.model(
  "tutorial",
  mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  )
);

const tutorial = new Tutorial({
  title: req.body.title,
  description: req.body.description,
  published: req.body.published ? req.body.published : false,
});

export default Tutorial;
