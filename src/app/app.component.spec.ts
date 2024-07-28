import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WorkoutService } from './workout.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AppComponent,CommonModule,FormsModule],
      providers:[WorkoutService]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // Test for checking if COmponent is being created or not 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
// test if the html element renders the correct title 
  it('should render title', () => {
    
    const titleElement: HTMLElement | null = fixture.nativeElement.querySelector('h2');
    expect(titleElement?.textContent).toContain('FiTrack');
  });
});
