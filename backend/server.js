import express from "express";
import cors from 'cors';
import connectDB from "./Database/conn.js";
import regUser from './Routes/regUser.js';
import getUser from './Routes/getUser.js';
import user from './Routes/user.js'
import curUser from './Routes/getCurUser.js'
const app = express();
const port = 4324;

app.use(cors());
app.use(express.json());
app.use('/api',regUser);
app.use('/api',getUser);
app.use('/api',user);
app.use('/api',curUser);
connectDB();
app.get('/', (req, res) =>{
    res.send('Server started')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})