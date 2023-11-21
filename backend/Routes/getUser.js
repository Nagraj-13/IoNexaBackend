import express from 'express'
import { sendDataController } from '../controllers/getData.js';

const Route =  express.Router();
Route.get('/getUser',sendDataController);
export default Route;