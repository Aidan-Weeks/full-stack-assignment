import { useState } from 'react';
import './App.css';
import Workout from './components/workout';
import WorkoutForm from './components/WorkoutForm';

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

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <WorkoutForm onSubmit={addWorkout} />
        {workouts.map((w) => (
        <Workout key={w.id} workout={w} onUpdate={updateWorkout } />
      ))}
    </div>
  ); 
}

export default App;
