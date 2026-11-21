import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const empty = { date: '', exercise: 'Bench press', weight: '', sets: '', reps: '' };

function WorkoutForm({initialValues = empty, onSubmit, submitLabel = 'Add workout', onCancel }) {
  const [form, setForm] = useState({...initialValues});

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

     const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.weight || !form.sets || !form.reps) return;
    onSubmit({ ...form, weight: Number(form.weight), sets: Number(form.sets), reps: Number(form.reps) });
    setForm(empty);
  };
  
     return (
      <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}
    >  
      <TextField type="date" name="date" label="Date" value={form.date} onChange={handleChange}
        size="small"
        slotProps={{ inputLabel: { shrink: true } }}/>
      <TextField name="exercise" value={form.exercise} onChange={handleChange}
       size="small" />
      <TextField type="number" name="weight" placeholder="kg" value={form.weight} onChange={handleChange}
       size="small" sx={{ width: 120 }} />
      <TextField type="number" name="sets" placeholder="Sets" value={form.sets} onChange={handleChange}
       size="small" sx={{ width: 90 }} />
      <TextField type="number" name="reps" placeholder="Reps" value={form.reps} onChange={handleChange}
       size="small"  sx={{ width: 90 }}/>
      <Button type="submit" variant="contained">{submitLabel}</Button>
      {onCancel && <Button onClick={onCancel}>Cancel</Button>}
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </Box>
  );
}

export default WorkoutForm;