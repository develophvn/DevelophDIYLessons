import express from 'express';

import { PORT } from '../config.js';
import uiRouter from '../ui/router.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(uiRouter);

app.listen(PORT, () => {
	console.log(`Server started on port ${ PORT }`);
});

export default app;
