import express from 'express';
const app = express();
import cors from 'cors';
import channelRouter from "./controllers/channel.js";


app.use(cors());
app.use('/api/channel', channelRouter)

export default app;