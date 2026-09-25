import { getWorkouts } from "@/Library/api";
import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/Types/workout";

export const WorkoutLibrary = async () => {
    const workouts = await getWorkouts();
    return (
        <section id="library" className="px-6 py-16">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <h2 className="text-4xl font-bold">
                        THE LIBRARY
                    </h2>

                    <p className="mt-2 text-zinc-400">
                        Twelve lifts covering every major muscle group.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {workouts.map((workout : Workout) => (
                        <WorkoutCard
                            key={workout.id}
                            workout={workout}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkoutLibrary;