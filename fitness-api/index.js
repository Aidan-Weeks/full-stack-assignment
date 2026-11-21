import dotenv from 'dotenv';
import express from 'express';
import workoutsRouter from './api/workouts';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/workouts', workoutsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
