// Get the input fields and the calculate button
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let calculateBtn = document.getElementById("calculateBtn");
let total = document.getElementById("total");
let average = document.getElementById("average");
let grade = document.getElementById("grade");

// Add event listener to the calculate button
calculateBtn.addEventListener("click", function() {
  // Get the values of the input fields
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  let n3 = Number(num3.value);
  let n4 = Number(num4.value);
  let n5 = Number(num5.value);

  // Calculate the total and average
  let sum = n1 + n2 + n3 + n4 + n5;
  let avg = sum / 5;

  // Display the total and average
  total.innerHTML = sum;
  average.innerHTML = avg;

  // Determine the grade
  if (avg > 95) {
    grade.innerHTML = "A+ grade";
  } else if (avg > 90 && avg <= 95) {
    grade.innerHTML = "A grade";
  } else if (avg > 85 && avg <= 90) {
    grade.innerHTML = "B+ grade";
  } else if (avg > 80 && avg <= 85) {
    grade.innerHTML = "B grade";
  } else if (avg > 75 && avg <= 80) {
    grade.innerHTML = "C grade";
  } else {
    grade.innerHTML = "D grade";
  }
});










