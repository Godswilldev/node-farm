import { Schema, model } from "mongoose";

const tourSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "A tour must have a name"],
  },

  rating: {
    type: Number,
    default: 4.5,
    required: [true, "A tour must have a rating"],
  },

  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});

const Tour = model("Tour", tourSchema);

export default Tour;
