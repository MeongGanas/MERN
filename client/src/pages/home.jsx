import WorkoutForm from "../components/workoutForm";
import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutDetails from "../components/workoutDetails";

export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home flex w-full">
      <div className="workouts w-1/2">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <div className="form w-1/2">
        <WorkoutForm />
      </div>
    </div>
  );
}
