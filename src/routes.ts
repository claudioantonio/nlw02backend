import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const Routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController;

Routes.post('/classes', classesController.create);
Routes.get('/classes', classesController.index);

Routes.post('/connections',connectionsController.create);
Routes.get('/connections', connectionsController.index);

export default Routes;