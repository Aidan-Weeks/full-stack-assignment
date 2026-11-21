function Workout ({workout }){

    return (
        <div>
      <strong>{workout.exercise}</strong> – {workout.date}
      <p>{workout.weight} kg {workout.sets} × {workout.reps}</p>
    </div>
    )
}

export default Workout;