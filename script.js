var special = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
console.log(special);
// Array of numeric characters to be included in password
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  console.log(numeric);
// Array of lowercase characters to be included in password
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
console.log(lowerCase);
// Array of uppercase characters to be included in password
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
console.log(upperCase);

// Function for getting a random element from an array
function randomArrayVal(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randElement = arr[randomIndex];
  return arr[randomIndex]
}
// start function to generate password
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  if(isNaN(length) === true) {
    alert("Click OK to continue.");
    return;
  }
  if(length>128) {
    alert("Password length must less than 129 characters");
    return;
  }
  if(length<8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  var isNum = confirm("Click ok to confirm numbers.")
  if(upperCase) {
    passwordOptions = passwordOptions.concat(alphaUpper)
  }

  if(isNum === false && upperCase === false && lowerCase === false && specialCase ===false) {
    alert("please choose one character type");
    return;
  }

  var upperCase = confirm("Do you want to use an uppercase character?")
  var lowerCase = confirm("Do you want to use a lowercase character?")
  var specialCase = confirm("Do you want to use a special character?")

  var passwordOptions = {
    length,
    isNum,
    upperCase,
    lowerCase,
    specialCase,
  }
  return passwordOptions;
}
//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var options = getPasswordOptions();
  console.log(options);
  var passwordArray = [];
  var results = [];
  if(options.isNum === true)
  if(options.upperCase === true)
    passwordArray = passwordArray.concat(upperCase)
  if(options.lowerCase === true)
    passwordArray = passwordArray.concat(lowerCase)
  if(options.specialCase === true)
    passwordArray = passwordArray.concat(specialCase)
  {
    passwordArray = passwordArray.concat(numeric)
  }

for(var i = 0; i < options.length; i++) {
  var index = Math.floor(Math.random() * passwordArray.length)
  var digit = passwordArray[index];
  results.push(digit)
  console.log(results)
  
}
var password = results.join("");
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
