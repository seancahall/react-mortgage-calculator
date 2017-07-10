# Mortgage Calculator

## Introduction

In this project we're going to:
  - Create a simple mortgage payment calculator app using React
  - Style the app using the Bootstrap framework

For this you will need to build a web form that accepts the loan balance, interest rate, loan term in years and period (either monthly or bi-monthly) and a calculate button. Below you will find the algorithm you will need to implement to figure out the payment when the calculate button is clicked. When complete, your app should closely resemble the screenshot below the algorithm.

## Helpful Images

<img src="http://i.imgur.com/Pn1GDZu.png" />
<img src="http://i.imgur.com/t8aMaja.png" />

## Setup

1. Open a terminal
2. Open the project folder in VS Code using the following command: `code ~/oca/startnow-mortgage-calculator`
3. Run: `npm install`.
4. As you add code to the project, you will want to view your progress in a browser. To do this, first type `npm run build` to compile your project. Then, type `npm start` to launch your project on a local webserver. In your console window, you should see the output `Server is listening on port 3000`. Open a browser to the url, `http://localhost:3000/` to render the project and view your progress.
5. The tests will confirm if you have completed the requirements. Type `npm test` and hit enter to run the tests. Then, write your code using the steps below. When you have written all the code to complete the project (based on the exit criteria) and the tests are passing, submit the assignment.

## Code

All of the code you need to write for this project should go in the `src/js/app.jsx` file. First we will define the HTML elements needed for the page. Place this HTML inside of the `div` element with the `className` attribute set to 'container' in  `src/js/app.jsx`. Use the [Bootstrap horizontal form layout](http://getbootstrap.com/css/#forms-horizontal) to define the visible elements of the page:
   - An `input` element for the user to enter the mortgage loan balance in US dollars with a name attribute of 'balance' and type 'number'.
   - An `input` element for the user to enter the annual percentage rate of charge (APR) with a name attribute of 'rate', a type attribute of 'number' and a step attribute of `0.01` to allow for decimal rate percentages.
   - An `input` element for the user to enter the loan term in years with a name attribute of 'term' and type 'number'.
   - A `select` element for the user to select a period with the name attribute of 'period', populated with `option` elements that display the available periods, in this case, either 'monthly' or 'bimonthly'. The value attribute inside of each `option` element should represent the corresponding number of periods over a year (12 or 6).
   - A `button` element with a name attribute of 'submit' for the user to calculate their monthly mortgage payment based on the above inputs.
   - A `div` element to display the mortgage payment with a name attribute of 'output'.
You will need to add additional attributes to these HTML elements as we develop the Javascript portion of the project.

Next, lets write some Javascript to implement the calculation logic for the project. All of this code should be located inside the curly braces of the logic block `class App extends Component`. Here we need to define 3 functions:

* A constructor method to initialize the state of the app. Here you will need to add a property for each input field to the state object and set their initial values. Then, return to your HTML and add a value attribute to each editable input element in your HTML to bind these elements to their respective properties on the state object.
* A function to update state values when an input changes, using event binding. Once this is in place, return to your HTML and add an `onChange` event to each of the input elements that calls this new method.
* A `calculate` function to determine the mortgage payment and then set state to bind  the result to the div with the name attributes of 'output' as a string like this:  `$1945.09 is your payment.` This function should accept 4 parameters: `balance`, `rate`, `term` and `period`. Finally, return to your HTML and add an `onClick` event to this button that calls the `calculate` function while passing the state object as an argument.


## Exit Criteria

* All tests should pass