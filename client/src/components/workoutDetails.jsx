export default function WorkoutDetails({ workout }) {
  return (
    <div class="block w-full p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {workout.title}
      </h5>
      <p class="font-normal text-gray-700 ">Reps: {workout.reps}</p>
      <p class="font-normal text-gray-700 ">Load (kg): {workout.load}</p>
    </div>
  );
}
