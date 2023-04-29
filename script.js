"use strict ";

const currentDate = new Date();

const currentDay = currentDate.getDay();
const currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth);
const currentYear = currentDate.getFullYear();

const btn = document.querySelector(".icon");

const calcDate = function (todaysDate, birhtDate) {
  return Math.abs(todaysDate - birhtDate);
};

const displayDate = function (className, value) {
  document.querySelector(className).textContent = value;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const dayOfBirth = Number(document.querySelector(".input--day").value);
  const monthOfBirth = Number(document.querySelector(".input--month").value);
  const yearOfBirth = Number(document.querySelector(".input--year").value);

  const ageInYears = function () {
    console.log("lambo");
  };
});

// ulate the difference in years var years = today.getFullYear () - birthDate.getFullYear ();

// Calculate the difference in months var months = today.getMonth () - birthDate.getMonth ();

// Adjust for leap years and incomplete months if (today.getDate () < birthDate.getDate ()) { months–; }

// Add 12 months if the birth month is after the current month if (months < 0) { years–; months += 12; }

// Display the result console.log (“You are " + years + " years and " + months + " months old.”)
