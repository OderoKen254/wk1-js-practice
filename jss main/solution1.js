
// Write a function that prompts the user to input student marks. The input should be between 0 and 100.
//  The output should correspond the correct grade, as shown below: 
    
    
    
    function calcGrade() {
        const marks = parseInt(prompt("Enter the student marks (0 - 100):"), 10);
    
        if (marks < 0 || marks > 100 || isNaN(marks)) {
            console.log("Invalid input! Please enter a number between 0 and 100.");
        } else if (marks > 79) {
            console.log("Grade: A");
        } else if (marks >= 60 && marks <= 79) {
            console.log("Grade: B");
        } else if (marks >= 50 && marks <= 59) {
            console.log("Grade: C");
        } else if (marks >= 40 && marks <= 49) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }
    }

const marks = parseInt(prompt("Enter the student marks (0 - 100):"), 10);
    
        if (marks < 0 || marks > 100 || isNaN(marks)) {
            console.log("Invalid input! Please enter a number between 0 and 100.");
        } else if (marks > 79) {
            console.log("Grade: A");
        } else if (marks >= 60 && marks <= 79) {
            console.log("Grade: B");
        } else if (marks >= 50 && marks <= 59) {
            console.log("Grade: C");
        } else if (marks >= 40 && marks <= 49) {
            console.log("Grade: D");
        } else {
            console.log("Grade: E");
        }

        calcGrade();