// check boxes
let $lowerCase = document.getElementById("lowerCase");
let $upperCase = document.getElementById("upperCase");
let $numbers = document.getElementById("numbers");
let $special = document.getElementById("special");

// slider and labels
let $slider = document.getElementById("slider");
let $sliderOutput = document.getElementById("sliderOutput");
let $alert = document.getElementById("alert");

// get slider value
let characterNums = () => $sliderOutput.innerHTML = $slider.value;

// password generation arrays
let userArray = [];
let thePassword = [];

// password displays here
let passwordHere = document.getElementById("password");

// buttons
let $generate = document.getElementById("generate");
let $copy = document.getElementById("copy");
let $clearPassword = document.getElementById("clearMe");

// show initial value of slider
characterNums();

// event listener to display slider value after mouse up
$slider.addEventListener('input', function (event){
  characterNums();
});

function clearTextArea(){
  userArray = [];
  thePassword = [];
  $alert.textContent = "";
  passwordHere.textContent = "";
}

// event listener on mouse up for slider
$slider.addEventListener('mouseup', function() {
  clearTextArea();
  generatePassword();
});

// event listener for generate button
$generate.addEventListener("click", function(){
  clearTextArea();
  generatePassword();
});

// modifies password depending on whether checkboxes are checked or not
$lowerCase.addEventListener("click", function (){
  clearTextArea();
  generatePassword();
});

$upperCase.addEventListener("click", function (){
  clearTextArea();
  generatePassword();
});

$numbers.addEventListener("click", function (){
  clearTextArea();
  generatePassword();
});

$special.addEventListener("click", function (){
  clearTextArea();
  generatePassword();
});

function generatePassword() {
  if (!$lowerCase.checked && !$upperCase.checked && !$numbers.checked && !$special.checked) {
    $alert.textContent = "Please choose password characters."
  }

  if ($lowerCase.checked) {
    lowerCase.forEach(function (lowerCase) {
      userArray.push(lowerCase);
    });
  }
  if ($upperCase.checked) {
    upperCase.forEach(function (upperCase) {
      userArray.push(upperCase);
    });
  }
  if ($numbers.checked) {
    numbers.forEach(function (numbers) {
      userArray.push(numbers);
    });
  }
  if ($special.checked) {
    special.forEach(function (special) {
      userArray.push(special);
    });
  }

// for loop to choose characters at random based on user preferences; generated characters are pushed into new array
for (let i = 0; i < $slider.value; i++) {
  let passwordString =
    userArray[Math.floor(Math.random() * userArray.length)];
  thePassword.push(passwordString);
}
passwordHere.textContent = thePassword.join("");
}
// copy pw to clipboard
$copy.addEventListener("click", function(){
  passwordHere.select();
  document.execCommand('copy');
  if (!passwordHere.value) {
    $alert.textContent = "Nothing to copy. Please generate a password.";
    return;
  }
});
// clear button function
$clearPassword.addEventListener("click", function () {
  passwordHere.textContent = "";

  // clear checkboxes
  $lowerCase.checked = false;
  $upperCase.checked = false;
  $numbers.checked = false;
  $special.checked = false;

  // clear slider values
  $slider.value = 12;
  $sliderOutput.innerHTML = $slider.value;
  $alert.textContent = "";
});


// object containing arrays of lowercase, uppercase, numeric, and/or special characters
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "<", ">", "?"];