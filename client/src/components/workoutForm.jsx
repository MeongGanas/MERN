import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(0);
  const [reps, setReps] = useState(0);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newTitle = title
    //   .toLowerCase()
    //   .split(" ")
    //   .map(function (word) {
    //     return word.replace(word[0], word[0].toUpperCase());
    //   })
    //   .join(" ");

    const workout = { title, reps, load };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad(0);
      setReps(0);
      setMessage("New Workout Added");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="max-w-sm mx-auto">
      {error && <h1 className="text-red-700 font-lg mb-5">{error}</h1>}
      {message && <h1 className="text-green-700 font-lg mb-5">{message}</h1>}
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your workout
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Push up"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="reps"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your reps
        </label>
        <input
          type="number"
          id="reps"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => {
            setReps(e.target.value);
          }}
          value={reps}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="load"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your Load (kg)
        </label>
        <input
          type="number"
          id="load"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          value={load}
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        onClick={handleSubmit}
      >
        Create
      </button>
    </form>
  );
}
