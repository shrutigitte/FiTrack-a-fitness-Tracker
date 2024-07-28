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
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have the 'fitness-tracker' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('fitness-tracker');
  // });

  it('should render title', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.nativeElement as HTMLElement;
    // console.log('Rendered title:', compiled.querySelector('h2').textContent);
    // expect(titleElement?.textContent).toContain('FiTrack');
    const titleElement: HTMLElement | null = fixture.nativeElement.querySelector('h2');
    expect(titleElement?.textContent).toContain('FiTrack');
  });
});
