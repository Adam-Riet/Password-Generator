// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array of possible character selections.
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lettersCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Special character list provided by OWASP, excluded several options.
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "?", "@",]



function getPasswordInfo () {
  var charSel = prompt("How many characters would you like?"+"(Please select between 8-128)")
  console.log(charSel);
  //If statement to return user to start if option isnt valid.
  if (charSel < 8) {
    window.alert("Please make sure it is 8 characters or more.");
    return;
  }
  if (charSel > 128) {
    window.alert("Please make sure it is 128 characters or less.");
    return;
  }
  
  //Added confirm function to yes or no questions. Thank you to Sabe.io for information.
  var numSel = confirm("Would you like any numbers")
  console.log(numSel);
  
  var specSel = confirm("Would you like any special characters?")
  console.log(specSel);
  

  var uppSel = confirm("Would you like any uppercase letters?")
  console.log(uppSel);

  var lowSel = confirm("Would you like any lowercase characters?")
  console.log(lowSel);

var passContainer = {
 length: charSel, 
 hasSpecialCharacters: specSel,
 hasNumbers: numSel,
 hasUppercase: uppSel,
 hasLowerCase: lowSel,

}
return passContainer
}

function generatePassword() {
var passwordOptions = getPasswordInfo()
var result = []
  if (passwordOptions.hasSpecialCharacters) {
    result.push(specialChar)
    console.log(result);
  }






}

generatePassword();






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
