import WorkoutDetails from "@/app/components/WorkoutDetails/WorkoutDetails";
import { getWorkoutById } from "@/Library/api";
import { notFound } from "next/navigation";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutPage = async ({ params }: WorkoutPageProps) => {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutPage;