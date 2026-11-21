import { useState } from 'react';
import WorkoutForm from './WorkoutForm';

function Workout ({workout, onUpdate, onDelete }){
    const [editing, setEditing] = useState(false);

    if (editing) {
    return (
      <div className="workout">
        <WorkoutForm
          initialValues={workout}
          submitLabel="Save"
          onSubmit={(updated) => {
            onUpdate(updated);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      </div>
    );
  }

  return (
    <div className="workout">
      <strong>{workout.exercise}</strong> – {workout.date.slice(0, 10)}
      <p>{workout.weight} kg {workout.sets} × {workout.reps}</p>
      <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => onDelete(workout.id)}>Delete</button>
    </div>
  );
}

export default Workout;