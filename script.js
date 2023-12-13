// Function for generating the password, called on button click by user later in code.
function generatePassword() {
  var passwordLength;
  var random;
  var charCode;
  var password = "";
  var charactersLength = 0;
  var paramAmount = 0;
  var incUpperCase = false;
  var incLowerCase = false;
  var incNumbers = false;
  var incSpecialChar = false;
  var lowerCase = [];
  var upperCase = [];
  var numbers = [];
  var specialChar = [];
  var usedCharacters = [];

  // For loop to add all lower case letters to an array using CharCode.
  for (i = 97; i < 123; i++) {
    charCode = String.fromCharCode(i);
    lowerCase.push(charCode);
  }

  // For loop to add all upper case letters to an array using CharCode.
  for (i = 65; i < 91; i++) {
    charCode = String.fromCharCode(i);
    upperCase.push(charCode);
  }

  // For loop to add all numbers letters to an array using CharCode.
  for (i = 48; i < 58; i++) {
    charCode = String.fromCharCode(i);
    numbers.push(charCode);
  }

  // The following for loops are to add all special characters to an array using CharCode, I used four because they unicodes are split.
  for (i = 32; i < 48; i++) {
    charCode = String.fromCharCode(i);
    specialChar.push(charCode);
  }
  for (i = 58; i < 65; i++) {
    charCode = String.fromCharCode(i);
    specialChar.push(charCode);
  }
  for (i = 91; i < 97; i++) {
    charCode = String.fromCharCode(i);
    specialChar.push(charCode);
  }
  for (i = 123; i < 127; i++) {
    charCode = String.fromCharCode(i);
    specialChar.push(charCode);
  }

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

  // Logs parameter amount.
  console.log("Amount of parameters being used: " + paramAmount)

  // The following if statements check to see which parameters are true and adds the length of the array to a variable called charactersLength and also adds the array itself to a seperate array called usedCharacters.
  if (incUpperCase) {
    usedCharacters = usedCharacters.concat(upperCase);
  }
  if (incLowerCase) {
    usedCharacters = usedCharacters.concat(lowerCase);
  }
  if (incNumbers) {
    usedCharacters = usedCharacters.concat(numbers);
  }
  if (incSpecialChar) {
    usedCharacters = usedCharacters.concat(specialChar);
  }

  charactersLength = usedCharacters.length;
  console.log(usedCharacters);

  function randomCharacter() {
    random = Math.floor(Math.random() * charactersLength);
    console.log("Random number is: " + random);

    return usedCharacters[random];
  }

  // Function for generating the password, will keep generating a random character and adding it to password until the password is as long as the user specified.
  for (var i = 0; i <= passwordLength; i++) {
    password = password + randomCharacter();
  }
  console.log(password);

  return password;
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
