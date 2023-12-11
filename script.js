var passwordLength;
var incUpperCase = false;
var incLowerCase = false;
var incNumbers = false;
var incSpecialChar = false;

// Function for generating the password, called on button click by user later in code.
function generatePassword() {
  // Asking user for desired PW length and storing their input in a variable.
  passwordLength = prompt("How many characters would you like your password to be? Choose a number between 8 and 128.");

  // While loop to check if the user selected a valid number, repeatedly asks until valid number is chosen.
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("That is not a valid number, please choose a number between 8 and 128.");
  }
  // Logs PW length.
  console.log("User chose " + passwordLength + " characters as their password length.");

  // Asks for the users desired password parameters, stores as true or false and logs to console.
  incUpperCase = confirm("Would you like your password to include upper case characters?");
  console.log("Include upper case: " + incUpperCase);

  incLowerCase = confirm("Would you like your password to include lower case characters?");
  console.log("Include lower case: " + incLowerCase);

  incNumbers = confirm("Would you like your password to include numbers?");
  console.log("Include numbers: " + incNumbers);

  incSpecialChar = confirm("Would you like your password to include special characters?");
  console.log("Include special characters: " + incSpecialChar);

  // While loop to validate wether or not at least one of the parameters are true, if not asks again. Logs results.
  while (!incUpperCase && !incLowerCase && !incNumbers && !incSpecialChar) {
    alert("You must choose at least 1 parameter for your password.")
    console.log("User failed to chose parameter, asking again.")

    incUpperCase = confirm("Would you like your password to include upper case characters?");
    console.log("Include upper case: " + incUpperCase);
  
    incLowerCase = confirm("Would you like your password to include lower case characters?");
    console.log("Include lower case: " + incLowerCase);
  
    incNumbers = confirm("Would you like your password to include numbers?");
    console.log("Include numbers: " + incNumbers);
  
    incSpecialChar = confirm("Would you like your password to include special characters?");
    console.log("Include special characters: " + incSpecialChar);
  }

  // Logs when the (while) loop has been broken.
  console.log("Parameters chosen.");

  // Need to check what parameters are being used
  // Need to check how long the password will be
  // Need to randomly select what the next character will be and store it
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
