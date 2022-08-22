const joi = require("joi");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const RanchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  purpose: { type: String, required: true },
  location: [
    { country: String, state: String, city: String, lat: String, lng: String },
  ],
  production: { type: String, required: true },
  areaSpace: { type: String, required: true },
  livestock: [{ type: ObjectId, ref: "livestock" }],
  todo: [{ activity: String, date: Date, status: String, comment: String }],
  user: { type: ObjectId, ref: "user", required: true },
});

const Ranch = mongoose.model("ranch", RanchSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().required().label("Name"),
    picture: joi.string().required().label("Picture"),
    purpose: joi.string().required().label("Purpose"),
    location: joi.array().required().label("Location"),
    production: joi.string().required().label("Production"),
    areaSpace: joi.string().required().label("AreaSpace"),
    todo: joi.array().label("Todo"),
    user: joi.string().required().label("User"),
  });
  return schema.validate(data);
};

module.exports = { Ranch, validate }