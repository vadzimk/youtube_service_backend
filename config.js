import dotenv from 'dotenv';

dotenv.config();

const PORT =process.env.PORT;
const API_KEY = process.env.API_KEY;
const CHANNEL_ID = `UCV8tyRakGZuXUwD-wYH1yGg`;
const DEFAULT_NUM_RESULTS = 12;

export default {PORT, API_KEY, CHANNEL_ID, DEFAULT_NUM_RESULTS};
