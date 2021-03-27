import express from "express";
import youtubeService from "../services/youtubeService.js";
import validationHelper from '../utils/validationHelper.js';


const channelRouter = express.Router();

channelRouter.get('/',
    async (req, res) => {
        let maxResults;
        let pageToken;
        let q;
        if (req.query.maxResults) {
            maxResults = parseInt(req.query.maxResults);
            if (typeof maxResults !== "number") {
                return res.status(400).json({error: 'maxResults value invalid'});
            }
        }
        if (req.query.pageToken) {
            pageToken = req.query.pageToken;
            if (!validationHelper.isAlphaString(pageToken)) {
                return res.status(400).json({error: 'pageToken value invalid'});
            }
        }
        if (req.query.q) {
            q = req.query.q;
        }

        try {
            const data = await youtubeService.fetchPage(maxResults, pageToken, q);
            res.json(data);
        } catch (e) {
            console.log(e.message);
            res.status(e.response.status).json({error: e.message});
        }

    });

export default channelRouter;