document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the input field element using JavaScript.
  var inputField = document.getElementById("inputField");

  // Add an event listener to the form submits an event.
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      // Implement a function that validates the input value using a regular expression for alphanumeric input.
      if (!isValidAlphanumeric(inputField.value)) {
        // Display an error message if the input value is not alphanumeric.
        alert("Error: Please enter only alphanumeric characters.");
        // Prevent the form from submitting if the input value is not alphanumeric.
        event.preventDefault();
      } else {
        // Display a confirmation if the input is valid and 'submits' the form.
        alert("Form submitted successfully!");
      }
    });

  // Function to validate alphanumeric input using a regular expression.
  function isValidAlphanumeric(input) {
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(input);
  }
});
