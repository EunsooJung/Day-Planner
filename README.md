# Day-Planner

Unit 05 Third-Party APIs Homework: Day Planner

- build a timer-based quiz application that stores high scores client-side.
  [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Preview

[![Day Planner Preview](https://raw.githubusercontent.com/EunsooJung/Day-Planner/master/assets/images/Day%20Planner.gif)](https://raw.githubusercontent.com/EunsooJung/Day-Planner/master/assets/images/Day%20Planner.gif)

## Usage

### Basic Usage

After downloading, simply edit the HTML, CSS and Javascript files included with the template in your favorite text editor to make changes. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Guidelines:

- Proceeds as follows:

  - The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:

  - The time
  - A field to hold user input
  - A save button

  - Clicking on the save button will store the time and user input in localStorage.

### Code Snippet

```javascript
// Get items from localStorage
let storedWDS = JSON.parse(localStorage.getItem('storedWDS'));

// Set items to localStorage when you click save icon
$(document).on('click', 'i', function(event) {
  event.preventDefault();
  let $index = $(this).attr('save-id');
  let inputId = '#input-' + $index;
  let $value = $(inputId).val();

  planTextArr[$index] = $value;

  $(`#saveid-${$index}`).removeClass('shadowPulse');
  localStorage.setItem('storedWDS', JSON.stringify(planTextArr));
});
```

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [moment.js](https://momentjs.com/)

## Authors

- **Michael(Eunsoo)Jung**

* [My Portfolio](https://eunsoojung.github.io/Unit-02-Responsive-Portfolio/portfolio.html)
* [https://eunsoojung.github.io/Day-Planner/](https://eunsoojung.github.io/Day-Planner/)
* [Link to Github](https://github.com/)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/) www.linkedin.com/in/eun-soo-jung/

## License

This project is licensed under the MIT License
