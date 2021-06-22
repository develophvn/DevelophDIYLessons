import axios from 'axios';

import { RSS_URL } from '../../config.js';

export default function () {
	return new Promise((resolve, reject) => {
		axios.get(RSS_URL)
		.then(res => {
			resolve(res.data);
		})
		.catch(err => {
			reject(err);
		});

	});
}
