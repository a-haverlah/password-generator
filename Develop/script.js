// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var userInput = window.prompt("How many characters would you like your password to contain?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("Please enter a number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a password that is between 8-128 characters.")
    return
  }

  var userNumbers = window.confirm("Do you want your password to include numbers?")
  var userSymbols = window.confirm("Do you want your password to include symbols?")
  var userUppercase = window.confirm("Do you want your password to include Uppercase Letters?")
  var userLowercase = window.confirm("Do you want your password to include lowercase letters?")

  var numberList = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["?", "!", "@", "$", "#", "%", "*", "^", ".", "/", "~"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsList = []

  if (userWantsNumbers === true) {
    optionsList.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsList.push(symbolList)
  }

  if (userWantsLowercase === true) {
    optionsList.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsList.push(uppercaseList)
  }
  console.log(optionsList)

  }






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
