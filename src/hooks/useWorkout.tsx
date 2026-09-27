import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";


const useWorkout = () => {
    const context = useContext(WorkoutContext);

    if (!context) {
        throw new Error("useWorkout must be used inside WorkoutProvider");
    }

    return context;
};

export default useWorkout;