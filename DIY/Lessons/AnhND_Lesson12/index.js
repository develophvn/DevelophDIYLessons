import http from 'http';

import readData from './readData.js';
import processData from './processData.js';

http.createServer(async (req, res) => {
	const xmlData = await readData();

	const newsData = await processData(xmlData);

	res.writeHead(200, {'Content-Type': "text/html; charset=utf-8"});
	res.write('<ul>')
	for (const news of newsData) {
		console.log(news.title[0]);
		res.write(`<li><a href="${news.link}" >${news.title[0]}</a></li>`);
	}

	res.end();
}).listen(8080);



