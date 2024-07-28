import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WorkoutService } from './workout.service';
import { FormsModule } from '@angular/forms';
interface Workout {
  name: string;
  type: string;
  minutes: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
  ]
})
export class AppComponent implements OnInit {
  title = 'FiTrack';
  userName: string = '';
  workoutType: string = 'Running';
  workoutMinutes: number = 0;
  searchTerm: string = '';
  selectedType: string = '';
  workoutTypes: string[] = ['Running', 'Cycling', 'Skipping', 'Pilates'];

  workouts: Workout[] = [
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
  displayedWorkouts: Workout[] = [];
  pageSize = 5;
  pageIndex = 1;
  total = 0;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.workouts = this.workoutService.getWorkouts();
    this.filterWorkouts();
  }


  addWorkout() {
    const newWorkout: Workout = {
        name: this.userName,
        type: this.workoutType,
        minutes: this.workoutMinutes
      };
      this.workouts.push(newWorkout);
      this.filterWorkouts();
      this.userName = '';
      this.workoutType = 'Running';
      this.workoutMinutes = 0;
    };
    filteredWorkouts: Workout[] = [...this.workouts];
    currentPage: number = 1;
    itemsPerPage: number = 4;

    
    filterWorkouts() {
      this.filteredWorkouts = this.workouts.filter(workout => {
        return (this.searchTerm === '' || workout.name.toLowerCase().includes(this.searchTerm.toLowerCase())) &&
               (this.selectedType === '' || workout.type === this.selectedType);
      });
      this.currentPage = 1; // Reset to first page after filtering
    }
    get paginatedWorkouts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredWorkouts.slice(startIndex, startIndex + this.itemsPerPage);
    }
  
    changePage(page: number) {
      this.currentPage = page;
    }
    totalPages() {
      return Math.ceil(this.filteredWorkouts.length / this.itemsPerPage);
    }
    

  onSearch() {
    this.updateDisplayedWorkouts();
  }

  onFilter() {
    this.updateDisplayedWorkouts();
  }

  onPageChange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.updateDisplayedWorkouts();
  }

  private updateDisplayedWorkouts() {
    let filteredWorkouts = this.workouts;

    if (this.searchTerm) {
      filteredWorkouts = filteredWorkouts.filter(workout => workout.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    if (this.selectedType) {
      filteredWorkouts = filteredWorkouts.filter(workout => workout.type === this.selectedType);
    }

    this.total = filteredWorkouts.length;
    this.displayedWorkouts = filteredWorkouts.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
  }
}
