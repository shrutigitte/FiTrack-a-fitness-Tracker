import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts = [
    { name: 'John Doe', type: 'Running', minutes: 30 },
    { name: 'Jane Smith', type: 'Swimming', minutes: 45 }
  ];

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout: { name: string, type: string, minutes: number }) {
    this.workouts.push(workout);
  }
}
