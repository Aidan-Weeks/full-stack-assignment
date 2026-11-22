import { useState, useEffect } from 'react';
import { getWorkouts, addWorkout as addWorkoutApi} from './api/workouts-api';
import Workout from './components/workout';
import WorkoutForm from './components/WorkoutForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function App() {
    const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getWorkouts()
      .then((list) => setWorkouts(list))
      .catch((err) => setError(err.message));
  }, []);

     const addWorkout = (workout) => {
    addWorkoutApi(workout)
      .then((saved) => setWorkouts([...workouts, saved]))
      .catch((err) => setError(err.message));
  };

    const updateWorkout = (update) => {
        setWorkouts(workouts.map((workout) => (workout.id === update.id ? update : workout)));
    }

    const deleteWorkout = (id) => {
      setWorkouts(workouts.filter((workout) => workout.id !== id));
    }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" sx={{ mb: 3, fontWeight: 700 }}>
        Fitness Tracker
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <WorkoutForm onSubmit={addWorkout} />
      </Paper>

      {workouts.map((w) => (
        <Workout key={w.id} workout={w} onUpdate={updateWorkout} onDelete={deleteWorkout} />
      ))}
    </Container>
  );
}

export default App;
