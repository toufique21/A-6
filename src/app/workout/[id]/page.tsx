import { getWorkoutById } from "@/Library/api";
import Image from "next/image";


interface WorkoutPageProps {
    params: Promise<{ id: string }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
    const { id } = await params;

    const workout = await getWorkoutById(id);

    return (
        <div>
            <div className="grid grid-cols-2 gap-5 container mx-auto mt-10">
                <div>
                    <Image className="border-2 rounded-2xl w-full h-170"
                    src={workout.image} alt="" width={700} height={200} />
                </div>
                <div>
                    <h2>
                        {workout.name}
                    </h2>
                    <p>
                        {workout.description}
                    </p>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WorkoutPage;