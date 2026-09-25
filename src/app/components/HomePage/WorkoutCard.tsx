
import { Workout } from '@/Types/workout';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { PiFireSimpleFill } from 'react-icons/pi';

interface WorkoutCardProps {
    workout: Workout;
}

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {

    if (!workout) {
        notFound();
    }

    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-[#222630] bg-[#15171D] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl mt-5">

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                    <Image width={450} height={400}
                        src={workout.image}
                        alt={workout.name}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <h2 className="text-xl font-bold tracking-tight text-white">
                        {workout.name}
                    </h2>

                    <div className='flex justify-between'>
                        {/* Muscle Groups */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {workout.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="flex justify-center items-center rounded-full bg-[#C2F800] px-3 py-1 text-xs font-medium text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>
                        {/* Equipment */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                            <span className="text-lg">🏋️</span>
                            <span>{workout.equipment}</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-orange-100 p-2">
                        <div className="text-center">
                            <div className='flex justify-center items-center gap-1'>
                                <div className='text-black'>
                                    <IoMdTime />
                                </div>
                                <p className="text-lg font-bold text-gray-900">
                                    {workout.duration}
                                </p>
                            </div>
                            <p className="text-xs text-gray-500">Minutes</p>
                        </div>

                        <div className="border-x border-gray-400 text-center">
                            <div className='flex justify-center items-center gap-1'>
                                <div className='text-black'><PiFireSimpleFill /></div>
                                <p className="text-lg font-bold text-gray-900">
                                    {workout.caloriesBurned}
                                </p>
                            </div>
                            <p className="text-xs text-gray-500">Calories</p>
                        </div>

                        <div className="text-center">
                            <p className="text-lg font-bold text-gray-900">
                                {workout.sets} × {workout.reps}
                            </p>
                            <p className="text-xs text-gray-500">Sets / Reps</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;