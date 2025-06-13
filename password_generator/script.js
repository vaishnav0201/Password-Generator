
function generatePassword() {
  const length = document.getElementById("length").value;
  const includeUpper = document.getElementById("uppercase").checked;
  const includeLower = document.getElementById("lowercase").checked;
  const includeNumber = document.getElementById("numbers").checked;
  const includeSymbol = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?";

  let allChars = "";
  if (includeUpper) allChars += upper;
  if (includeLower) allChars += lower;
  if (includeNumber) allChars += numbers;
  if (includeSymbol) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randIndex];
  }

  document.getElementById("result").value = password;
}

function copyPassword() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
