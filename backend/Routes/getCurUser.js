import express from 'express'
import { sendCurUserController } from '../controllers/getCurUser.js';

const Route =  express.Router();
Route.get('/getCurUser',sendCurUserController);
export default Route;