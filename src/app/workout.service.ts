import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts = [
    { name: 'Kriti Mahajan', type: 'Running', minutes: 30 },
    { name: 'Vedica Jhalani', type: 'Cycling', minutes: 45 },
    { name: 'Aashi Yadav', type: 'Swimming', minutes: 60 },
    { name: 'Sarthak Kulkarni', type: 'Running', minutes: 20 },
    { name: 'Harry Potter', type: 'Running', minutes: 10 },
    { name: 'Nikitha Gowda', type: 'Yoga', minutes: 50 },
    { name: 'Milani Gaur', type: 'Cycling', minutes: 40 },
    { name: 'Sunanda Kendre', type: 'Skipping', minutes: 40 },
    { name: 'Prajakta Shikhre', type: 'Pilates', minutes: 40 }
  ];

  getWorkouts() {
    return this.workouts;
  }

  addWorkout(workout: { name: string, type: string, minutes: number }) {
    this.workouts.push(workout);
  }
}
