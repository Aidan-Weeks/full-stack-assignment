import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkoutForm from './WorkoutForm';

function Workout ({workout, onUpdate, onDelete }){
    const [editing, setEditing] = useState(false);

    if (editing) {
    return (
        <Card sx={{ mb: 2, p: 2 }}>
        <WorkoutForm
          initialValues={workout}
          submitLabel="Save"
          onSubmit={(updated) => {
            onUpdate(updated);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      </Card>
    );
  }

  return (
    <Card sx={{ mb: 2 }}>
        <CardContent sx={{ pb: 0 }}>
        <Typography variant="body2" color="text.secondary">{workout.date.slice(0, 10)}</Typography>
        <Typography variant="h6">{workout.exercise}</Typography>
        <Typography>{workout.weight} kg · {workout.sets} × {workout.reps}</Typography>
      </CardContent>
 <CardActions>
        <IconButton aria-label="edit" onClick={() => setEditing(true)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onDelete(workout.id)}>
          <DeleteIcon color="error" />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Workout;