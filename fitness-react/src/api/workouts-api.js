export const getWorkouts = async () => {
  const response = await fetch('/api/workouts');
  if (!response.ok) {
    throw new Error(`Could not load workouts (${response.status})`);
  }
  const data = await response.json();
  return data.workouts;    
};