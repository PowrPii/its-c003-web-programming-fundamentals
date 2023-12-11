var x = 10;
var y = 5;
var z = x * y;

document.getElementById("z").textContent = z;

// var myname = "x";
var myName = "Fifa";

document.getElementById("myName").textContent = myName;

//

var num1 = "5";
var num2 = 6;
var num3 = num1 + num2;

document.getElementById("num3").textContent = num3;

// var num4 = 22 % 5;
// num2 = num2 - 3;
// num2--;
// num2++;

function printHello() {
    document.getElementById("printHello").innerHTML += "Hello<br>";
}

printHello();
printHello();

//

function greet(name) {
    document.getElementById("greet").textContent += `Hello, ${name}!`;
}

greet("Fifa");

// 

function calcArea(n1, n2) {
    document.getElementById("area").innerHTML = `Area is ${n1 * n2} u<sup><small>2</small></sup>`;
}

calcArea(4, 5)

//

var mark = 60;

if (mark >= 50) {
    document.getElementById("mark").textContent = "You passed!";
}
else {
    document.getElementById("mark").textContent = "You failed!";
}

//

choice = "beef"

if (choice == "chicken") {
    document.getElementById("choice").textContent = "You get chicken rice";
}
else if (choice == "beef") {
    document.getElementById("choice").textContent = "You get beef noodles";
}
else if (choice == "fish") {
    document.getElementById("choice").textContent = "You get fish soup";
}
else if (choice == "mutton") {
    document.getElementById("choice").textContent = "You get mutton curry";
}
else {
    document.getElementById("case-choice").textContent = "You get vegetarian";
}

//

var maths = 60;
var science = 35;

if (maths >= 50 && science >= 50) {
    document.getElementById("graduation").textContent = "You can graduate!";
}
else {
    document.getElementById("graduation").textContent = "You cannot graduate...";
}

//

var case_choice = "chicken"

switch(case_choice) {
    case "chicken":
        document.getElementById("case-choice").textContent = "You get chicken rice";
        break;
        case "beef":
            document.getElementById("case-choice").textContent = "You get beef noodles";
            break;
        case "fish":
            document.getElementById("case-choice").textContent = "You get fish soup";
            break;
        case "mutton":
            document.getElementById("case-choice").textContent = "You get mutton curry";
            break;
        default:
            document.getElementById("case-choice").textContent = "You get vegetarian";
}

//

for (var i = 0; i < 10; i++) {
    document.getElementById("for-loop").innerHTML += `Hello ${i}<br>`;
}

//

var count = 0;

while (count < 100) {
    document.getElementById("while-loop").innerHTML += `Hi ${count}<br>`;
    count = (count + 1) * 2;
}

//



