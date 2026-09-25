"use client";

import useWorkout from "@/hooks/useWorkout";
import { Workout } from "@/Types/workout";
import Image from "next/image";
import toast from "react-hot-toast";

interface WorkoutDetailsProps {
  workout: Workout;
}

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const { plan, saved, addToPlan, saveWorkout } = useWorkout();

  const alreadyInPlan = plan.find(
    (item) => item.id === workout.id
  );

  const alreadySaved = saved.find(
    (item) => item.id === workout.id
  );

  const handleAddToPlan = () => {
    if (alreadyInPlan) return;

    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSaveWorkout = () => {
    if (alreadySaved) return;

    saveWorkout(workout);
    toast.success("Saved for later");
  };

  

  return (
    <div className="mx-auto mt-6 max-w-6xl overflow-hidden bg-[#111] text-white shadow-2xl">

      <div className="grid gap-2 lg:grid-cols-2">

        {/* LEFT - IMAGE */}
        <div className="min-h-[700px]">
          <Image
            width={700}
            height={700}
            src={workout.image}
            alt={workout.name}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT - EVERYTHING */}
        <div className="p-6 md:p-8">

          {/* Name */}
          <h1 className="text-3xl font-bold md:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-400">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5">
            <h3 className="mb-3 font-semibold">
              Target Muscles
            </h3>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="mt-6 rounded-3xl">

            <div className="flex items-center justify-between rounded-t-2xl bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Equipment
              </p>
              <p className="font-medium">
                {workout.equipment}
              </p>
            </div>

            <div className="flex items-center justify-between border-y border-gray-700 bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Difficulty
              </p>
              <p>{workout.difficulty}</p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-700 bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Sets
              </p>
              <p>{workout.sets}</p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-700 bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Reps
              </p>
              <p>{workout.reps}</p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-700 bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Duration
              </p>
              <p>{workout.duration} min</p>
            </div>

            <div className="flex items-center justify-between border-b border-gray-700 bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Calories
              </p>
              <p>{workout.caloriesBurned} kcal</p>
            </div>

            <div className="flex items-center justify-between rounded-b-2xl bg-white/5 p-4">
              <p className="text-sm font-semibold uppercase text-gray-400">
                Rating
              </p>
              <p>{workout.rating}</p>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h2 className="mb-3 text-xl font-bold">
              Instructions
            </h2>

            <ol className="space-y-2">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-400"
                >
                  <span className="font-bold text-[#ccff00]">
                    {index + 1}.
                  </span>

                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">

            <button
              onClick={handleAddToPlan}
              disabled={!!alreadyInPlan}
              className="flex-1 rounded-xl bg-[#ccff00] px-5 py-3 font-bold text-black transition hover:bg-[#b7e600] disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400"
            >
              {alreadyInPlan ? "Already Added" : "Add to Plan"}
            </button>

            <button
              onClick={handleSaveWorkout}
              disabled={!!alreadySaved}
              className="flex-1 rounded-xl border border-[#ccff00] px-5 py-3 font-bold text-[#ccff00] transition hover:bg-[#ccff00] hover:text-black disabled:cursor-not-allowed disabled:border-gray-700 disabled:text-gray-500"
            >
              {alreadySaved ? "Already Saved" : "Save Workout"}
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;