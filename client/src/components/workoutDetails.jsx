import { useEffect, useState } from "react";

function WorkoutDetails({ workout }) {
  return (
    <div className="block w-full p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {workout.title}
      </h5>
      <p className="font-normal text-gray-700 ">Reps: {workout.reps}</p>
      <p className="font-normal text-gray-700 ">Load (kg): {workout.load}</p>
    </div>
  );
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div>
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
    </div>
  );
}
