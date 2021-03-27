import axios from 'axios';
import config from "../config.js";


// axios.interceptors.request.use((req) => {
//     console.log(req);
//     return req;
// });

const baseUrl = `https://www.googleapis.com/youtube/v3/search?`;

const fetchPage = async (maxResults = config.DEFAULT_NUM_RESULTS, pageToken, q) => {

    const params = {
        key: config.API_KEY,
        channelId: config.CHANNEL_ID,
        type: 'video',
        part: 'snippet,id',
        order: 'date',
    }

    if (maxResults) params.maxResults = maxResults;
    if (pageToken) params.pageToken = pageToken;
    if (q) params.q = q;
    const res = await axios.get(baseUrl, {params});
    return res.data;
}

const youtubeService = {fetchPage};
export default youtubeService;
