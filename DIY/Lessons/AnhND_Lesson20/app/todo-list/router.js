import express from 'express';

import { Todos } from '../models/index.js';

const router = express.Router();

router.post('/item/check',async (req, res) => {
	const { itemId, checked } = req.body;

	await Todos.updateCheckedItem(itemId, checked);
	res.send(true);
});


export default router;
