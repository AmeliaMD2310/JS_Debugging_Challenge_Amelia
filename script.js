/*Amelia MacDonald
W0467922
Exercise 4
Client Side Programming
February 20, 2024*/

//Fixed Script.js file
studentName = "Amelia"; // Fixed variable name to match usage.....Also changed to my own name for assignment
studentAge = 20; // Fixed '==' to '=' 
isEnrolled = true; // Changed 'True' to 'true' 

document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + "<br>"); 
document.write("Age: " + studentAge + "<br>"); // changed variable name to studentAgeto match and added line break for readability
document.write("Enrolled: " + isEnrolled + "<br>"); // Added line break for readability

ageString = String(studentAge);
document.write("Age Type: " + typeof(ageString) + "<br>"); // Fixed typeof syntax (added parentheses) and added line break


num1 = Number(prompt("Enter first number")); // Converted input to number to avoid string concatenation issue
num2 = Number(prompt("Enter second number"));
document.write("Sum: " + (num1 + num2) + "<br>"); // Fixed concatenation to correctly add numbers, also added line break

userAge = Number(prompt("Enter your age")); // Fixed missing parenthesis and ensured number conversion
if (userAge >= 18) { // Changed '=' to '>=' 
    document.write("You can vote! <br>"); //added line break for output readability
} else {  
    document.write("Sorry, you can't vote. <br>"); //added line break for output readability
}

for (i = 1; i < 10; i++) {
    document.write(i + "<br>"); // Added line break for readability
}

num = Number(prompt("Enter a number greater than 10")); // Ensured num is initialized before the loop
while (num < 10) {
    num = Number(prompt("Enter a number greater than 10")); // Ensured correct conversion and loop behavior
}
