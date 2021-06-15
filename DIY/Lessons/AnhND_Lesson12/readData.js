import axios from 'axios';

const URL = 'https://vnexpress.net/rss/khoa-hoc.rss';

export default function () {
	return new Promise((resolve, reject) => {
		axios.get(URL)
		.then(res => {
			resolve(res.data);
		})
		.catch(err => {
			reject(err);
		});

	});
}
