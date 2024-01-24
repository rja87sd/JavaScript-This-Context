"use strict";

//  Declare constants and their values.
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");

// Declare a constant to contain the messages for each button, the function to create a new paragraph element and appent it to the document, and the functions to populate the new paragraph element with a message depending on which button is clicked.
const buttonHandler = {
  buttonText1: "Button 1 has been clicked.",
  buttonText2: "Button 2 has been clicked.",
  buttonText3: "Button 3 has been clicked.",
  button1Message: function () {
    this.buttonClickMessage(this.buttonText1);
  },
  button2Message: function () {
    this.buttonClickMessage(this.buttonText2);
  },
  button3Message: function () {
    this.buttonClickMessage(this.buttonText3);
  },
  buttonClickMessage: function (message) {
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  },
};

// Add event listeners to each button so that when each button is clicked, the message and functions from the buttonHandler are bound to the button.
button1.addEventListener(
  "click",
  buttonHandler.button1Message.bind(buttonHandler)
);
button2.addEventListener(
  "click",
  buttonHandler.button2Message.bind(buttonHandler)
);
button3.addEventListener(
  "click",
  buttonHandler.button3Message.bind(buttonHandler)
);

// Create an object called person and give it a name property.
const person = {
  name: "Charlie",
  //   Give the object a method that is a standard function.
  greet: function () {
    console.log("Hello,", this.name + ".");
  },

  //   Give the object a method that is an arrow function.
  farewell: a => console.log (a, this.name + "."),
};

// Invoke each method. Note that the arrow function does not populate the desired data to the console log.
person.greet();
person.farewell("Goodbye,");
