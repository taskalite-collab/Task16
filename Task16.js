
// Task 1 Check if a given number is less than or equal to 100 //

var number = prompt("Enter your number please")
if (number <= 100) {
    console.log("number is less than or equal to 100")
} else {
    console.log("number is greater than 100")
}

// Task 2 Check the number of characters in text //

var str = prompt("Enter a string")
if (str.length > 100) {
    console.log("string is long")
} else {
    console.log("string is short")
}

// Task 3 Password validation //

var password = prompt("Enter the password")
var confirm_password = "1234"
if (password == confirm_password) {
    console.log("Password is validation")
} else {
    console.log("no valid")
}

// Task 4 Check number positive or negative //

var number = prompt("Enter your number") 
if (number >= 0) {
    console.log ("positive number")
} else {
    console.log("negative number")
}

// Task 5 Check the day of the week if saterday //

var WeekDay = prompt("Enter a WeekDay")
if (WeekDay == "Saterday") {
    console.log("weekend")
} else {
    console.log("work day")
}

// Task 6 Verifying academic grade

var Grade = prompt("Enter your academic grade");
if (Grade >= 80) {
    console.log("A");
} else if (Grade >= 70) {
    console.log("B");
} else if (Grade >= 60) {
    console.log("C");
} else if (Grade >= 50) {
    console.log("D");
} else {
    console.log("F");
}

// Task 7 Check temperature //

var temp = prompt("Enter the temperature")
if (temp >= 30) {
    console.log("it's hot")
} else {
    console.log("it's cold")
} 

// Task 8 Checking an odd or even number //

var number = prompt("Enter your number")
if (number % 2 == 0) {
    console.log ("even")
} else {
    console.log ("odd")
}

// Task 9 University Entry Check //

var Grade = prompt("Enter your grade")
if (Grade >= 20) {
    console.log ("You can enter the university")
} else {
    console.log ("You can't enter")
}