import { Workout } from "@/Types/workout";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="group mt-5 w-full max-w-sm overflow-hidden rounded-3xl border border-[#222630] bg-[#15171D] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={450}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Difficulty */}
                    <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {workout.difficulty}
                    </span>

                    {/* Rating */}
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 backdrop-blur">
                        <span className="text-yellow-500">★</span>
                        {workout.rating}
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Title */}
                    <h2
                        className={`${oswald.className} py-3 text-xl font-bold leading-tight text-white`}
                    >
                        {workout.name}
                    </h2>

                    {/* Muscle Groups & Equipment */}
                    <div className="flex flex-col gap-3">

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="flex items-center justify-center rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Equipment */}
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-lg">🏋️</span>
                            <span>{workout.equipment}</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-orange-100 p-2">

                        {/* Duration */}
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1">
                                <IoMdTime className="text-lg text-black" />

                                <p className="text-lg font-bold text-gray-900">
                                    {workout.duration}
                                </p>
                            </div>

                            <p className="text-xs text-gray-500">
                                Minutes
                            </p>
                        </div>

                        {/* Calories */}
                        <div className="border-x border-gray-400 text-center">
                            <div className="flex items-center justify-center gap-1">
                                <PiFireSimpleFill className="text-lg text-black" />

                                <p className="text-lg font-bold text-gray-900">
                                    {workout.caloriesBurned}
                                </p>
                            </div>

                            <p className="text-xs text-gray-500">
                                Calories
                            </p>
                        </div>

                        {/* Sets / Reps */}
                        <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">
                                {workout.sets} × {workout.reps}
                            </p>

                            <p className="text-xs text-gray-500">
                                Sets / Reps
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;