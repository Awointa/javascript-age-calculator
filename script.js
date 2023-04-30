"use strict ";

const currentDate = new Date();

const currentDay = currentDate.getDay();
console.log(currentDay);
const currentMonth = currentDate.getMonth() + 1;
console.log(currentMonth);
const currentYear = currentDate.getFullYear();

const btn = document.querySelector(".icon");

const displayDate = function (className, value) {
  document.querySelector(className).textContent = value;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const birthDay = Number(document.querySelector(".input--day").value);
  const birthMonth = Number(document.querySelector(".input--month").value);
  const birthYear = Number(document.querySelector(".input--year").value);

  if (!birthDay && !birthMonth && !birthYear) return;
  const years = birthYear - currentYear;
  const months = birthMonth - currentMonth;
  const days = currentDay - birthDay;
  console.log(currentDay);
  console.log(birthDay);

  console.log(years);
  console.log(months);
  console.log(days);
});

// ulate the difference in years var years = today.getFullYear () - birthDate.getFullYear ();

// Calculate the difference in months var months = today.getMonth () - birthDate.getMonth ();

// Adjust for leap years and incomplete months if (today.getDate () < birthDate.getDate ()) { months–; }

// Add 12 months if the birth month is after the current month if (months < 0) { years–; months += 12; }

// Display the result console.log (“You are " + years + " years and " + months + " months old.”)
