// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of possible character selections.
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lettersCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Special character list provided by OWASP, excluded several options.
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "?", "@",]

function generatePassword () {
  var response = prompt("How many characters would you like?"+"(Please select between 8-128)")
  console.log(response);
  //If statement to return user to start if option isnt valid.
  if (response < 8) {
    return;
  }
  if (response > 128) {
    return;
  }
  
  //Added confirm function for yes or no questions. Thank you to Sabe.io for information.
  var response = confirm("Would you like any special characters?")
  console.log(response);
  

  var response = confirm("Would you like any uppercase letters?")
  console.log(response);

  var response = confirm("Would you like any lowercase characters?")
  console.log(response);

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
