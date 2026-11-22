import express from 'express';
import { workoutsData } from './workoutsData';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router(); 

// Get all tasks
router.get('/', (req, res) => {
    res.json(workoutsData);
});

router.get('/:id', (req, res) => {
    const { id } = req.params
    const workout = workoutsData.workouts.find(workout => workout.id === id);
    if (!workout) {
        return res.status(404).json({ status: 404, message: 'Workout not found' });
    }
    return res.status(200).json(workout);
});

router.post('/', (req, res) => {
    const { date, exercise, weight, sets, reps } = req.body;
    const newWorkout = {
        id: uuidv4(),
        date,
        exercise,
        weight,
        sets,
        reps
    };
    workoutsData.workouts.push(newWorkout);
    res.status(201).json(newWorkout);
    workoutsData.total_results++;
});

export default router;
