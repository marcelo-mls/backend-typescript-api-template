// Arquivo apenas de exemplo
import { Request, Response } from 'express';
import model from '../models/mySql.model.example';

async function getAll(_req: Request, res: Response): Promise<Response> {
  const result = await model.getAll();
  
  return res.status(200).json(result);
}

export default {
  getAll
};