import mongoose from 'mongoose';

import { MONGO_URL } from '../config.js';

const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(MONGO_URL, mongoConfig, (err) => {
    if (err) throw err;

    console.log('Successfully connected');
});
