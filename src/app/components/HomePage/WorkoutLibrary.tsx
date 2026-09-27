import { getWorkouts } from "@/Library/api";
import WorkoutCard from "./WorkoutCard";
import { Workout } from "@/Types/workout";
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const WorkoutLibrary = async () => {
    const workouts = await getWorkouts();
    return (
        <section id="library" className="px-6 py-5">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <h2 className={`${oswald.className} py-1 text-3xl font-bold leading-tight text-white`}>
                        THE LIBRARY
                    </h2>

                    <p className=" text-zinc-400">
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