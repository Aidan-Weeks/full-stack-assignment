import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input name="exercise" value={form.exercise} onChange={handleChange} />
      <input type="number" name="weight" placeholder="kg" value={form.weight} onChange={handleChange} />
      <input type="number" name="sets" placeholder="Sets" value={form.sets} onChange={handleChange} />
      <input type="number" name="reps" placeholder="Reps" value={form.reps} onChange={handleChange} />
      <button type="submit">{submitLabel}</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default WorkoutForm;