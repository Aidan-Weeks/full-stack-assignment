import { useState } from 'react';
import Workout from './components/workout';
import WorkoutForm from './components/WorkoutForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const sampleWorkouts = [
  { id: 1, date: '2026-11-17', exercise: 'Bench press', weight: 100, sets: 1, reps: 1 },
  { id: 2, date: '2026-11-13', exercise: 'Paused bench', weight: 80, sets: 3, reps: 4 },
  { id: 3, date: '2026-11-10', exercise: 'Incline bench', weight: 65, sets: 4, reps: 8 },
];
function App() {
    const [workouts, setWorkouts] = useState(sampleWorkouts);

    const addWorkout = (workout) => {
    setWorkouts([{ ...workout, id: Date.now() }, ...workouts]);
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
