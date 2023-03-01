import { Schema, model } from 'mongoose';

const exampleSchema = new Schema({
  column_example: { 
    type: String,
    required: true 
  }
},
{ timestamps: true });

const ModelExample = model('examples', exampleSchema);

export default ModelExample;