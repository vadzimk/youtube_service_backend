import axios from 'axios';
import config from "../config.js";
import data from './data.js';

const channelDataUrl = `https://www.googleapis.com/youtube/v3/search?\
key=${config.API_KEY}\
&channelId=${config.CHANNEL_ID}\
&type=video&part=snippet,id\
&order=date`;

const fetchPage = async (maxResults = config.DEFAULT_NUM_RESULTS, pageToken, q) => {
    let url = `${channelDataUrl}`;
    if (maxResults){
        url = `${url}&maxResults=${maxResults}`
    }
    if (pageToken) {
        url = `${url}&pageToken=${pageToken}`;
    }
    if (q) {
        url = `${url}&q=${q}`;
    }
    console.log(url);
    // TODO replace when quota available
    // const res = await axios.get(url);
    // return res.data;
    return data;
}

const youtubeService = {fetchPage};
export default youtubeService;
