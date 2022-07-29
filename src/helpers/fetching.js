const fetching = async (method, data, headers) => {
	let req = {
		method: method,
	};

	if (method == 'POST') {
		req['body'] = JSON.stringify(data);
	}

	if (headers) {
		req['headers'] = headers;
	}

	console.log(req, '<< req');

	const getData = await fetch('http://localhost:4000/posts', req);


	const toJson = await getData.json();

	return toJson;
};

export default fetching;
