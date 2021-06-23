import express from 'express';

import { PORT } from '../config.js';
import uiRouter from '../ui/router.js';
import todoRouter from '../todo-list/router.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(uiRouter);
app.use('/todo', todoRouter);


app.listen(PORT, () => {
	console.log(`Server started on port ${ PORT }`);
});

export default app;
