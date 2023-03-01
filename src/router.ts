import express from 'express';
// Linhas apenas de exemplo
import mySqlController from './controllers/mySql.controller.example';
import mongoController from './controllers/mongo.controller.example';

const router = express.Router();

// Linhas apenas de exemplo
router.get('/example/mysql', mySqlController.getAll);
router.get('/example/mongo', mongoController.getAll);

export default router;