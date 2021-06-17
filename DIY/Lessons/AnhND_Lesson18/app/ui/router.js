import express from 'express';

import readData from '../news/lib/readData.js';
import processData from '../news/lib/processData.js';
import { NEWS_LIMIT } from '../config.js';

const router = express.Router();

router.get('/', async (req, res) => {
	const xmlData = await readData();

	const newsData = await processData(xmlData);
	newsData.length = NEWS_LIMIT;

	res.render('dashboard', { newsData });
});

export default router;
