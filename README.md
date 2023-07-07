# Frontend Mentor - Age calculator app solution

![Alt text](<assets/images/Screenshot (41).png>)

## My process

I created the structure of the app using HTML5, CSS3 and vanilla javscript

- first of I created the structure with HTML5
- next is styled the structure i created for mobile formats first and then for larger displays with CSS3
- I also used the DOM in javascript and event handlers, which are features in javascript to manipulate the app and make it responsive to the user

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS Media Queries
- Downloaded custom font's
- Vanilla Javascript

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

### What I learned

I've known about media queries for a while but havent used it to adjust content to fit display size and
learnt how to create validation code and how to output error messages in javascript.

```js
const validateMonthDays = (givenday, givenMonth) => {
  const daysInMonth = month[givenMonth - 1];
  if (givenday > daysInMonth) {
    messages.push("Must be a valid date");
    inputDayElementError.textContent = messages.join(", ");
  }
};


### Continued development
i got very comfortable with my use of arrays with this projects, thanks for creating this platform


### Useful resources
I learnt the validation logic from "Web dev simplified" a youtube channel

## Author
- Frontend Mentor - [@Awointa](https://www.frontendmentor.io/profile/Awointa)


```
