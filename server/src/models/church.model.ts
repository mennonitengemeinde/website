import { model, Schema, Model, Document } from "mongoose";

interface IChurch extends Document {
  name: string;
  street?: string;
  city: string;
  province: string;
  country: string;
  mixlrUrl?: string;
}

const ChurchSchema: Schema = new Schema({
  name: { type: String, required: true },
  street: { type: String },
  city: { type: String, required: true },
  province: { type: String, required: true },
  country: { type: String, required: true },
  mixlrUrl: { type: String },
});

export const Church: Model<IChurch> = model("Church", ChurchSchema);
