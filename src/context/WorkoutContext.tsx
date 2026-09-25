"use client"
import { Workout } from "@/Types/workout";
import { Children, createContext, useState } from "react";


interface WorkoutContextType {
    plan: Workout[];
    saved: Workout[];

    addToPlan: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    saveWorkout: (workout: Workout) => void;
    removeSaved: (id: number) => void;
    markAsDone: (id: number) => void;

}

const WorkoutContext = createContext<WorkoutContextType>(undefined);

export const WorkoutProvider = ({ children }) => {
    const [plan, setPlan] = useState<Workout[]>([]);
    const [saved, setSaved] = useState<Workout[]>([]);

    const addToPlan = (workout: Workout) => {
        setPlan((currentPlan) => {
            if (currentPlan.length >= 5) {
                return currentPlan;
            }
            const alreadyExists = currentPlan.find((item) => item.id === workout.id)

            if (alreadyExists) { return currentPlan }

            return [...currentPlan, workout];
        })

    }

    const removeFromPlan = (id: number) => {
        setPlan((currentPlan) =>
            currentPlan.filter((item) => item.id !== id)
        );
    };

    const saveWorkout = (workout: Workout) => {
        setSaved((currentSaved) => {
            const alreadyExists = currentSaved.find(
                (item) => item.id === workout.id
            );

            if (alreadyExists) {
                return currentSaved;
            }

            return [...currentSaved, workout];
        });
    };

    const removeSaved = (id: number) => {
        setSaved((currentSaved) =>
            currentSaved.filter((item) => item.id !== id)
        );
    };

    const markAsDone = (id: number) => {
        setPlan((currentPlan) =>
            currentPlan.filter((item) => item.id !== id)
        );
    };

    return (
        <WorkoutContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeSaved,
                markAsDone,
            }}>
            {children}
        </WorkoutContext.Provider>
    );


}