import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  secretIdentity: {
    type: String,
    required: true,
  },
  superpowers: {
    type: [String],
    required: true,
  },
  assignedMission: { type: mongoose.Schema.Types.ObjectId, ref: "Mission" },
});

const superheroModel = mongoose.model("Superheroe", superheroSchema);
export default superheroModel;
