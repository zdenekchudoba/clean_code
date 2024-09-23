// Function to handle grading and associated actions
function handleGrade(grade) {
  let letterGrade = "";

  if (grade >= 90) {
      letterGrade = "A";
      congratulateStudent(); // Outstanding performance
  } else if (grade >= 80) {
      letterGrade = "B";
      congratulateStudent(); // Good performance
  } else if (grade >= 70) {
      letterGrade = "C";
  } else if (grade >= 60) {
      letterGrade = "D";
  } else {
      letterGrade = "F";
  }

  console.log("Grade: " + letterGrade);
  updateRecords(); // Always update records
}

// Example usage
const grade = 85; // Example grade
handleGrade(grade);
