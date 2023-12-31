import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { formatDistanceToNow } from "date-fns";

export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="block w-full p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {workout.title}
      </h5>
      <p className="font-normal text-gray-700 ">Reps: {workout.reps}</p>
      <p className="font-normal text-gray-700 ">Load (kg): {workout.load}</p>
      <p className="font-normal text-gray-700 ">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <button
        type="button"
        className="text-white mt-5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
        value={workout._id}
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
}
