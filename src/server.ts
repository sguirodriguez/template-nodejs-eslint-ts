import express from 'express';
import {calculateMedia} from 'math';

const app = express();

app.listen(3333, () => {
	console.log('Server on port 3333');
});
