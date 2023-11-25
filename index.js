// alert("Hello World");

var num = 20;

console.log(num);

//Hoisting

var marks;
console.log(marks);
marks = 50;

// Arrays 

let boys = ["Anik", "Dipu", "Rahim"];
let girls = ["Soni", "Rupa", "Jori"];

let students  = boys.concat(girls);

console.log(students);


// For in loop

const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}

// For of  loop 

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + " ";
}

console.log(text);


// Problem : Sum of even and odd values from an array

let arrayEvenOdd = [1,2,3,4,5,6,7,8,9,10, 21, 32, 45];

let sumEven =0, sumOdd =0;

for(let i=0;i < arrayEvenOdd.length; i++){
   if((arrayEvenOdd[i] %2) == 0 ){
    sumEven+=arrayEvenOdd[i];
    console.log("Even: "+arrayEvenOdd[i]);
   }
  if((arrayEvenOdd[i] %2) != 0 )
   {
    sumOdd+=arrayEvenOdd[i];
    console.log("Odd: "+arrayEvenOdd[i]);
   }
}

console.log("The sum of even number is " + sumEven);
console.log("The sum of odd number is " + sumOdd);


// Problem: Find the second maximum value from an array 

let arrayForFindSecondMax = [1,2,3,4,5,6,7,8,9,10, 21, 32, 45,67];
function findSecondMax(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;  
}

const secondMax = findSecondMax(arrayForFindSecondMax);
console.log("Second maximum value:", secondMax);

// DOM - Document Object Model

document.write("Hello World"); // Run time code and not view in page source


document.getElementById("heading").innerHTML = "This is add from DOM";

let img = document.getElementById("imgTest");
img.src = "img/blue_5.png";
let p = document.getElementsByClassName("text"); 

p[0].innerHTML="This is add from DOM using class";

// Query Selector

let pq =  document.querySelector(".text");

pq.innerHTML = "This is from Query Selector";



// Events

// Call  from html page 

function hello(){
  alert("Clicked done!");
}

function calculateValues(){
  let num1 = document.querySelector("#numOne");
  let num2 = document.querySelector("#numTwo");
  let sum = parseInt(num1.value) + parseInt (num2.value);
  let lblResult = document.querySelector("#lblResult");
  lblResult.innerHTML="The sum is " + sum + "<br>";
  
}

