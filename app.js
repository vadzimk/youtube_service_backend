import express from 'express';
const app = express();
import channelRouter from "./controllers/channel.js";



app.use('/api/channel', channelRouter)

export default app;