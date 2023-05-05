"use strict ";
// universal variables
const btn = document.querySelector(".icon");
const inputDay = document.querySelector(".input--day");
const inputMonth = document.querySelector(".input--month");
const inputYear = document.querySelector(".input--year");

//Date elements
let currentDate = new Date();
let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

// error message elements
const errorElements = document.querySelectorAll(".error-message");
const inputElements = document.querySelectorAll(".input");
const inputLabelElements = document.querySelectorAll(".input-label");
const inputDayElementError = document.getElementById("day-error");
const inputMonthElementError = document.getElementById("month-error");
const inputYearElementError = document.getElementById("year-error");

const resultElements = document.querySelectorAll(".output--number");

let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let messages = [];
const validateMonthDays = (day, givenMonth) => {
  const daysInMonth = month[givenMonth - 1];
  if (day > daysInMonth) {
    messages.push("Must be a valid date");
    inputDayElementError.textContent = messages.join(", ");
  }
};

const validateAllDates = (givenDay, givenMonth, givenYear) => {
  if (
    givenDay > 31 ||
    (givenDay == 0 && givenMonth > month.length) ||
    (givenMonth == 0 && givenYear > 2023)
  )
    messages = [
      "Must be a valid day",
      "Must be a valid month",
      "Must be in the past",
    ];
};

const displayDate = function (className, value) {
  document.querySelector(className).innerHTML = value;
};

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let birthDay = Number(inputDay.value);
  let birthMonth = Number(inputMonth.value);
  let birthYear = Number(inputYear.value);

  // error messages
  if (birthDay == "" && birthMonth == "" && birthYear == "")
    messages.push("This field is required");
  errorElements.forEach((errElement) => {
    errElement.textContent = messages.join(", ");
  });

  validateMonthDays(birthDay, birthMonth);

  validateAllDates(birthDay, birthMonth, birthYear);

  console.log(messages);

  if (messages.length > 0) {
    inputElements.forEach((input) => (input.style.borderColor = "#ff5757")),
      inputLabelElements.forEach(
        (inputLabel) => (inputLabel.style.color = "#ff5757"),
        (messages = [])
      );
  } else {
    inputElements.forEach((input) => (input.style.borderColor = "#dbdbdb")),
      inputLabelElements.forEach(
        (inputLabel) => (inputLabel.style.color = "#716f6f")
      );
  }

  console.log(messages);

  //calculator Logic

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

  displayDate(".output--days", currentAgeInDays);
  displayDate(".output--months", currentAgeInMonths);
  displayDate(".output--years", currentAgeInYears);
});
