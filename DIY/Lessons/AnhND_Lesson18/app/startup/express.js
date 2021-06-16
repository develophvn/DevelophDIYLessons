import express from 'express';

import { PORT } from '../config.js';

const app = express();

app.listen(PORT, () => {
	console.log(`Server started on port ${ PORT }`);
});

export default app;