import React, { useContext } from 'react';
import { WorkoutContext } from "@/context/WorkoutContext";


const useWorkout = () => {
    const context = useContext(WorkoutContext)

    return context;
};

export default useWorkout;