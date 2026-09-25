export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  calories: number;
  rating: number;
  sets: number;
  reps: string;
  description: string;
  instructions: string[];
}