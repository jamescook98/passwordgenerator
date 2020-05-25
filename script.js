
    var chars = ""
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var special = "@!#$%^&*()"

    function generate() {
      var userLength = parseInt(document.getElementById("passwordLength").value);

      var checkBoxErrorMessage = "";
      var passwordCharacters = "";
      var isGood = true;

      if (document.getElementById("uppercaseCheck").checked) {
        passwordCharacters += uppercase;
      }
      if (document.getElementById("lowercaseCheck").checked) {
        passwordCharacters += lowercase;
      }
      if (document.getElementById("numbersCheck").checked) {
        passwordCharacters += numbers;
      }
      if (document.getElementById("specialCheck").checked) {
        passwordCharacters += special;
      }
      if (passwordCharacters.length < 1) {
        checkBoxErrorMessage = "Dude, check a box.";
        isGood = false;
      }
      document.getElementById("checkBoxError").textContent = checkBoxErrorMessage;

      var userLengthErrorMessage = "";
      if (isNaN(userLength)) {
        userLengthErrorMessage = "Please enter a number between 8 and 128.";
        isGood = false;
      } else if (userLength < 8) {
        userLengthErrorMessage = "Length must be at least 8.";
        isGood = false;
      } else if (userLength > 128) {
        userLengthErrorMessage = "Length can be no more than 128.";
        isGood = false;
      }
      document.getElementById("passwordLengthError").textContent = userLengthErrorMessage;

      var generatedPasswordMessage = "";

      if (isGood) {
        generatedPasswordMessage = generateRandomString(userLength, passwordCharacters);
      }
      document.getElementById("generatedPasswordMessage").textContent = generatedPasswordMessage;
    }

    function generateRandomString(length, charset) {
      var randomString = "";
      if (charset && charset.length > 0) {
        for (var i = 0; i < length; i++) {
          randomString += charset.charAt(Math.floor(Math.random() * charset.length));
        }
      }
      return randomString;
    };