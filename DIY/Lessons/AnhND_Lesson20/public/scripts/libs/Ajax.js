const Ajax = {
	post(url, data) {
		const request = {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		  }
		  return fetch(url, request);
	},
	delete(url, data) {
		const request = {
			method: 'DELETE',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};
		return fetch(url, request);
	}
}
