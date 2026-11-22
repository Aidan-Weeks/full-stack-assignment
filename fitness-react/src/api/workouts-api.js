export const getWorkouts = async () => {
  const response = await fetch('/api/workouts');
  if (!response.ok) {
    throw new Error(`Could not load workouts (${response.status})`);
  }
  const data = await response.json();
  return data.workouts;    
};

export const addWorkout = async (workout) => {
  const response = await fetch('/api/workouts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(workout),
  });
  if (!response.ok) {
    throw new Error(`Could not add workout (${response.status})`);
  }
  return response.json();   
};

export const deleteWorkout = async (id) => {
  const response = await fetch(`/api/workouts/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error(`Could not delete workout (${response.status})`);
  }
};