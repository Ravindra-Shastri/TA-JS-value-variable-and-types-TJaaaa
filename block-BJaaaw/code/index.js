// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = Number(prompt("Enter a number?"));
if (number % 2 === 0) {
  alert(`number is even`);
} else {
  alert(`number is odd`);
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = prompt ("Enter numA");
let numB = prompt("Enter NumB");
if (numA > numB) {
  alert(`${numA} is greater`);
} else {
  alert(`${numB} is greater`);
}
// 3. Convert the above code using`?` terniary operator
numA > numB? alert(`${numA} is greater`) : alert(`${numB}is greater`)
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName= prompt("Eter a house name from GOT");
if(houseName === "Stark") {
  alert("winter is coming");
} else if (houseName === "lannister") {
  alert("A lannister always pays his debt")
} else {
  alert("All men must die")
}

// 5. Convert the above code using`?` terniary operator
houseName==="Stark"? alert("winter is coming"):houseName === "lannister"?alert("A lannister always pays his debt"):alert("All men must die")

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt("enter the name of the month");
switch (monthName){
  case "January":
    alert("the number of the days are 31");
    break;
    case "February":
    alert("the number of the days are 28");
    break;
    case "March":
    alert("the number of the days are 31");
    break;
    case "April":
    alert("the number of the days are 30");
    break;
    case "May":
    alert("the number of the days are 31");
    break;
    case "June":
    alert("the number of the days are 30");
    break;
    case "July":
    alert("the number of the days are 31");
    break;
    case "August":
    alert("the number of the days are 31");
    break;
    case "September":
    alert("the number of the days are 30");
    break;
    case "October":
    alert("the number of the days are 31");
    break;
    case "November":
    alert("the number of the days are 30");
    break;
    case "December":
    alert("the number of the days are 31");
    break;
    default:
    alert("Not a valid input")                                                                                                                               
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/
let salery = prompt("Enter your salery");
switch (true) {
  case Salery <=20000:
    let tax = (salery * 10)/100;
    alert(`your in-hand amount ${salery - tax}`);
    break;
    case Salery <=40000:
    let tax = (salery * 20)/100;
    alert(`your in-hand amount ${salery - tax}`);
    break;
    case Salery <=50000:
    let tax = (salery * 30)/100;
    alert(`your in-hand amount ${salery - tax}`);
    break;
    default:
      alert("Not a valid input!")
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`
*/
if (marks > 100) {
  alert ("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
  }else if (marks > 30 && marks < 50) {
  alert("Grade C");
   } else {
   alert("Grade D");
  }

  switch (true) {
  case marks > 100:
  alert ("Marks can't be greater than 100");
  break;
  case marks > 80 && marks < 100:
  alert("Grade A");
  break;
  case marks > 50 && marks < 80:
  alert("Grade B");
  break;
  case marks > 30 && marks < 50:
  alert("Grade C");
  break;
  default:
  alert("Grade D");
  break;
  }
/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`what is the weather like outside?`);
switch (weather) {
  case (sunny):
  alert (`wear a t-shirt`);
  break;
  case "rainy":
  alert(`Don't forget to take your raincoat?`);
  break;
  case "hot":
  alert(`Get a hanky`);
  break;
  case "freezing":
  alert(`Get your sweeter on`);
  break;
  default:
  alert(`Not a valid input`);
  break;
}