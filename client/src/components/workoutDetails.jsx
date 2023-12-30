export default function WorkoutDetails({ workout }) {
  return (
    <div className="block w-full p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {workout.title}
      </h5>
      <p className="font-normal text-gray-700 ">Reps: {workout.reps}</p>
      <p className="font-normal text-gray-700 ">Load (kg): {workout.load}</p>
      <p className="font-normal text-gray-700 ">{workout.createdAt}</p>
    </div>
  );
}
