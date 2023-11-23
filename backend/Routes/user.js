import express from 'express'
import { userController } from '../controllers/currentUser.js';
const Route = express.Router();
Route.post('/User',userController);
export default Route;