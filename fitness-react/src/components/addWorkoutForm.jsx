import { useState } from 'react';

const empty = { date: '', exercise: 'Bench press', weight: '', sets: '', reps: '' };

function AddWorkoutForm({ onAdd }) {
  const [form, setForm] = useState(empty);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

     const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.date || !form.weight || !form.sets || !form.reps) return;
    onAdd({ ...form, weight: Number(form.weight), sets: Number(form.sets), reps: Number(form.reps) });
    setForm(empty);
  };
  
     return (
    <form onSubmit={handleSubmit} className="add-form">
      <input type="date" name="date" value={form.date} onChange={handleChange} />
      <input name="exercise" value={form.exercise} onChange={handleChange} />
      <input type="number" name="weight" placeholder="kg" value={form.weight} onChange={handleChange} />
      <input type="number" name="sets" placeholder="Sets" value={form.sets} onChange={handleChange} />
      <input type="number" name="reps" placeholder="Reps" value={form.reps} onChange={handleChange} />
      <button type="submit">Add workout</button>
    </form>
  );
}

export default AddWorkoutForm;