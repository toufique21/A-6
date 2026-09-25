import { Workout } from "@/Types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export const getWorkouts = async() => {
    const response = await fetch(API_URL);

    if(!response.ok){
        throw new Error("Failed to fetch workouts");
    }

    return response.json();
}

export const getWorkoutById = async(id : string):Promise<Workout> => {
    const workouts = await getWorkouts();
    return workouts.find((workout : Workout) => Number(workout.id) === Number(id))
}