import Workouts from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

export default function Home() {
  return (
    <div className="home flex w-full">
      <div className="workouts w-1/2">
        <Workouts />
      </div>
      <div className="form w-1/2">
        <WorkoutForm />
      </div>
    </div>
  );
}
