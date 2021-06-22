import xml2js from 'xml2js';

export default function(xmlData) {
	return new Promise((resolve, reject) => {
		xml2js.parseString(xmlData, (err, res) => {
			if (err) {
				return reject(err);
			}

			resolve(res.rss.channel[0].item);
		})
	})
}
