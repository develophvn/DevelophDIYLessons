import express from 'express';

import readData from '../news/lib/readData.js';
import processData from '../news/lib/processData.js';
import { NEWS_LIMIT } from '../config.js';
import { Todos } from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
	const xmlData = await readData();

	const newsData = await processData(xmlData);	
	const todos = await Todos.findAll();

	if (newsData.length > NEWS_LIMIT) {
		newsData.length = NEWS_LIMIT;
	}

	res.render('dashboard', { newsData, todos });
});

export default router;
