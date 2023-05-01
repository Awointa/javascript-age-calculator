"use strict ";

const displayDate = function (className, value) {
  document.querySelector(className).innerHTML = value;
};

const btn = document.querySelector(".icon");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let birthDay = Number(document.querySelector(".input--day").value);
  let birthMonth = Number(document.querySelector(".input--month").value);
  let birthYear = Number(document.querySelector(".input--year").value);

  let currentDate = new Date();
  let currentDay = currentDate.getDay();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDay > currentDay) {
    currentDay += month[currentDay - 1];
    currentMonth = currentMonth - 1;
  }
  if (birthMonth > currentMonth) {
    currentMonth += 12;
    currentYear -= 1;
  }
  let currentAgeInDays = currentDay - birthDay;
  let currentAgeInMonths = currentMonth - birthMonth;
  let currentAgeInYears = currentYear - birthYear;

  console.log(currentAgeInYears);

  displayDate(".output--days", currentAgeInDays);
  displayDate(".output--months", currentAgeInMonths);
  displayDate(".output--years", currentAgeInYears);
});

// ulate the difference in years var years = today.getFullYear () - birthDate.getFullYear ();

// Calculate the difference in months var months = today.getMonth () - birthDate.getMonth ();

// Adjust for leap years and incomplete months if (today.getDate () < birthDate.getDate ()) { months–; }

// Add 12 months if the birth month is after the current month if (months < 0) { years–; months += 12; }

// Display the result console.log (“You are " + years + " years and " + months + " months old.”)
