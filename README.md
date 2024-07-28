# FitnessTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

You can include a section in your README file to document the tests you have written for your `AppComponent`. Here’s an example of what you might write:

---

## Testing

### Overview

The `AppComponent` has been thoroughly tested to ensure it behaves as expected. The tests cover the following areas:

### Tests

1. **Component Creation**

   - **Test Description**: Verifies that the `AppComponent` is created successfully.
   - **Test Code**:
     ```typescript
     it('should create the app', () => {
       expect(component).toBeTruthy();
     });
     ```
   - **Purpose**: Ensures that the `AppComponent` instance is correctly instantiated and available for further testing.

2. **Title Rendering**

   - **Test Description**: Checks that the component renders the correct title in the HTML.
   - **Test Code**:
     ```typescript
     it('should render title', () => {
       const titleElement: HTMLElement | null = fixture.nativeElement.querySelector('h2');
       expect(titleElement?.textContent).toContain('FiTrack');
     });
     ```
   - **Purpose**: Verifies that the title `FiTrack` is correctly displayed in the `h2` element of the component's template.

### Test Setup

- **Standalone Component**: `AppComponent` is a standalone component and is imported directly in the `TestBed` configuration.
- **Dependencies**: The tests include necessary modules like `CommonModule` and `FormsModule`.

---

Feel free to adjust the content to better fit the style and requirements of your README file.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


SCREENSHOT
![ScreenShot](<unit test passed.png>)


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
