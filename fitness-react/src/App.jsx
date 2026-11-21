import { useState } from 'react';
import './App.css';
import Workout from './components/workout';
import AddWorkoutForm from './components/addWorkoutForm';

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

  return (
    <div className="App">
      <h1>Fitness Tracker</h1>
      <AddWorkoutForm onAdd={addWorkout} />
      {workouts.map((w) => (
        <Workout key={w.id} workout={w} />
      ))}
    </div>
  ); 
}

export default App;
