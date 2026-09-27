"use client";

import useWorkout from "@/hooks/useWorkout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const MyPlanPage = () => {
    const {
        plan,
        saved,
        removeFromPlan,
        removeSaved,
        addToPlan,
        markAsDone,
    } = useWorkout();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const [sortBy, setSortBy] = useState<
        "duration" | "calories" | "rating"
    >("duration");

    const totalMinutes = plan.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = plan.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    // Sort Today's Plan
    const sortedPlan = [...plan].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    // Sort Saved
    const sortedSaved = [...saved].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    return (
        <div>
            <main className="min-h-screen bg-black px-4 py-10 text-white md:px-8 lg:px-12">
                <div className="mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold md:text-5xl">
                            MY PLAN
                        </h1>

                        <p className="mt-3 text-gray-400">
                            Cap of five lifts for today. Finish them, then load
                            more.
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        {/* Exercises */}
                        <div className="rounded-xl border border-gray-800 bg-[#111] p-6">
                            <p className="text-sm text-gray-400">
                                Exercises
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {plan.length}
                            </h2>
                        </div>

                        {/* Minutes */}
                        <div className="rounded-xl border border-gray-800 bg-[#111] p-6">
                            <p className="text-sm text-gray-400">
                                Minutes
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalMinutes}
                            </h2>
                        </div>

                        {/* Calories */}
                        <div className="rounded-xl border border-gray-800 bg-[#111] p-6">
                            <p className="text-sm text-gray-400">
                                Calories
                            </p>

                            <h2 className="mt-2 text-3xl font-bold">
                                {totalCalories}
                            </h2>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8 flex gap-8 border-b border-gray-800">

                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`pb-3 font-semibold ${
                                activeTab === "plan"
                                    ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                    : "text-gray-500"
                            }`}
                        >
                            Today's Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`pb-3 font-semibold ${
                                activeTab === "saved"
                                    ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                                    : "text-gray-500"
                            }`}
                        >
                            Saved
                        </button>
                    </div>

                    {/* Sorting Dropdown */}
                    <div className="mb-6 flex justify-end">
                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value as
                                        | "duration"
                                        | "calories"
                                        | "rating"
                                )
                            }
                            className="rounded-lg border border-gray-700 bg-[#111] px-4 py-3 text-sm text-white outline-none focus:border-[#ccff00]"
                        >
                            <option value="duration">
                                Sort by Duration
                            </option>

                            <option value="calories">
                                Sort by Calories
                            </option>

                            <option value="rating">
                                Sort by Rating
                            </option>
                        </select>
                    </div>

                    {/* Today's Plan */}
                    {activeTab === "plan" ? (
                        plan.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-gray-700 py-16 text-center">
                                <h2 className="text-2xl font-semibold">
                                    Your plan is empty
                                </h2>

                                <p className="mt-2 text-gray-400">
                                    Add some workouts to start your plan.
                                </p>

                                <Link
                                    href="/"
                                    className="mt-6 inline-block rounded-lg bg-[#ccff00] px-6 py-3 font-semibold text-black"
                                >
                                    Browse Workouts
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-5">

                                {sortedPlan.map((workout) => (
                                    <div
                                        key={workout.id}
                                        className="flex flex-col gap-5 rounded-xl border border-gray-800 bg-[#111] p-5 md:flex-row md:items-center"
                                    >
                                        <Image
                                            src={workout.image}
                                            width={200}
                                            height={200}
                                            alt={workout.name}
                                            className="h-48 w-full rounded-lg object-cover md:h-32 md:w-48"
                                        />

                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold uppercase">
                                                {workout.name}
                                            </h2>

                                            <p className="mt-1 text-gray-400">
                                                {workout.equipment}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                                                <span>
                                                    {workout.duration} min
                                                </span>

                                                <span>
                                                    {workout.caloriesBurned} kcal
                                                </span>

                                                <span>
                                                    ★ {workout.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">

                                            <Link
                                                href={`/workout/${workout.id}`}
                                                className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-[#ccff00] hover:text-[#ccff00]"
                                            >
                                                View Details
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    markAsDone(workout.id);
                                                    toast.success(
                                                        "Workout completed!"
                                                    );
                                                }}
                                                className="rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-semibold text-black"
                                            >
                                                ✓ Done
                                            </button>

                                            <button
                                                onClick={() => {
                                                    removeFromPlan(workout.id);
                                                    toast.success(
                                                        "Workout removed"
                                                    );
                                                }}
                                                className="rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                                            >
                                                X
                                            </button>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        )
                    ) : (

                        /* Saved */
                        saved.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-gray-700 py-16 text-center">
                                <h2 className="text-2xl font-semibold">
                                    No saved workouts
                                </h2>

                                <p className="mt-2 text-gray-400">
                                    Save workouts that you want to do later.
                                </p>

                                <Link
                                    href="/"
                                    className="mt-6 inline-block rounded-lg bg-[#ccff00] px-6 py-3 font-semibold text-black"
                                >
                                    Browse Workouts
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-5">

                                {sortedSaved.map((workout) => (
                                    <div
                                        key={workout.id}
                                        className="flex flex-col gap-5 rounded-xl border border-gray-800 bg-[#111] p-5 md:flex-row md:items-center"
                                    >
                                        <Image
                                            src={workout.image}
                                            width={200}
                                            height={200}
                                            alt={workout.name}
                                            className="h-48 w-full rounded-lg object-cover md:h-32 md:w-48"
                                        />

                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold uppercase">
                                                {workout.name}
                                            </h2>

                                            <p className="mt-1 text-gray-400">
                                                {workout.equipment}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                                                <span>
                                                    {workout.duration} min
                                                </span>

                                                <span>
                                                    {workout.caloriesBurned} kcal
                                                </span>

                                                <span>
                                                    ★ {workout.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">

                                            <Link
                                                href={`/workout/${workout.id}`}
                                                className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium transition hover:border-[#ccff00] hover:text-[#ccff00]"
                                            >
                                                View Details
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    addToPlan(workout);
                                                    toast.success(
                                                        "Added to today's plan"
                                                    );
                                                }}
                                                className="rounded-lg bg-[#ccff00] px-4 py-2 text-sm font-semibold text-black"
                                            >
                                                + Add to Plan
                                            </button>

                                            <button
                                                onClick={() => {
                                                    removeSaved(workout.id);
                                                    toast.success(
                                                        "Removed from saved"
                                                    );
                                                }}
                                                className="rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                                            >
                                                X
                                            </button>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        )
                    )}

                </div>
            </main>
        </div>
    );
};

export default MyPlanPage;