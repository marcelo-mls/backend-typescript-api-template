// Arquivo apenas de exemplo
import { Request, Response } from 'express';
import ModelExample from '../models/mongo.model.example';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result = await ModelExample.find();
  
  return res.status(200).json(result);
}

export default {
  getAll
};