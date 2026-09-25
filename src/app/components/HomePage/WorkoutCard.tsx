
import { Workout } from '@/Types/workout';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface WorkoutCardProps {
    workout: Workout;
}

export const WorkoutCard = ({ workout }: WorkoutCardProps) => {

    if (!workout) {
        notFound();
    }

    return (
        <Link href={`/workout/${workout.id}`}>
            <div className="rounded-xl bg-zinc-900 p-4 hover:bg-zinc-800">

                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={500}
                    height={300}
                    className="h-60 w-full rounded-lg object-cover"
                />

                <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full border border-zinc-600 px-3 py-1 text-xs"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <h2 className="mt-3 text-xl font-bold">
                        {workout.name}
                    </h2>

                    <p className="mt-2 text-sm text-zinc-400">
                        {workout.equipment}
                    </p>

                    <div className="mt-4 flex justify-between text-sm">
                        <span>{workout.duration} min</span>
                        <span>{workout.calories} kcal</span>
                        <span>⭐ {workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;