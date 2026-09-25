import { getWorkoutById } from "@/Library/api";


interface WorkoutPageProps {
    params: Promise<{ id: string }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    return (
        <div>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
        </div>
    );
};

export default WorkoutPage;