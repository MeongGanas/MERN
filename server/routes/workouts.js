const express = require("express");
const {
  createWorkout,
  getWorkout,
  getAllWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
