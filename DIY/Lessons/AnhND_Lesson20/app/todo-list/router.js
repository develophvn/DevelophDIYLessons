import express from 'express';

import { Todos } from '../models/index.js';

const router = express.Router();

router.post('/item/check',async (req, res) => {
	const { itemId, checked } = req.body;

	await Todos.updateCheckedItem(itemId, checked);
	res.send(true);
});

router.post('/item/',async (req, res) => {
	const { title } = req.body;

	await Todos.addNewItem(title);
	res.send(true);
});


export default router;
