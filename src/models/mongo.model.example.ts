import { Schema, model, Document } from 'mongoose';

interface IExample extends Document {
  column_example: string
}

const exampleSchema = new Schema(
  { column_example: { type: String, required: true }},
  { timestamps: true }
);

const ModelExample = model<IExample>('examples', exampleSchema);

export default ModelExample;