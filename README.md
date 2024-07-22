# BMI Calculator

# A Body Mass Index (BMI) Calculator built using React.js and useMemo for optimized performance.

# Features :

- Calculate BMI based on user input (height and weight)
  Display BMI category (Underweight, Normal weight, Overweight, Obesity)

- Responsive design for mobile and desktop
  Optimized calculation using useMemo for performance improvement

- Display BMI category (Underweight, Normal weight, Overweight, Obesity) with dynamic color changes:
  Underweight: Blue
  Normal weight: Green
  Overweight: Orange
  Obesity: Red

# Installation:

- Clone the repository:git clone https://github.com/himpan1998/BMI-Calculator.git
- Navigate to the project directory: cd bmi-calculator
- Install the dependencies: npm install
- Start the development server: npm start
  Open the application in your browser: http://localhost:3000
- Build the Project : npm build

- Slide the height and weight to using input slider to calculate BMI.
- View the calculated BMI and corresponding category.

# Project Structure :

- public/: Public assets and the main HTML file.
- src/: Contains all the React components and styles.
- App.js: Main component that renders the BMI calculator.
- index.js: Entry point of the application.
- App.css: Styling for the application.

# Implementation Details :

# Steps:

Setup React Project:

- npx create-rect-app bmi-calculator
- install all dependencies

# Create Components

- here app.js is functional components used for user input

# Implement BMI Calculation:

- Use useState to manage height, weight, and BMI state.
- Implement a function to calculate BMI based on height and weight.
- Use useMemo to optimize the BMI calculation, ensuring it only recalculates when the input values change.

# Add Styles:

Use CSS to style the components for a clean and responsive design (app.css).

# Test and Debug:

- Test the application thoroughly to ensure accurate BMI calculations and correct category display.
