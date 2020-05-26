    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "0123456789"
    var special = "@!#$%^&*()"

    function generate() {
      //parses inputted length into an int that determines password length
      var userLength = parseInt(document.getElementById("passwordLength").value);

      //empty string to be filled with selected characters; "isGood" checks for errors and if there are any it won't display a generated password
      var passwordCharacters = "";
      var isGood = true;

      //concatenating strings to form a set of characters from which a password is generated. throws an error if none selected
      var checkBoxErrorMessage = "";
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
        checkBoxErrorMessage = "Please check at least one box.";
        isGood = false;
      }
      document.getElementById("checkBoxError").textContent = checkBoxErrorMessage;

      //checks if given length is not a number or is outside specified range and throws an error if so
      var userLengthErrorMessage = "";
      if (isNaN(userLength)) {
        userLengthErrorMessage = "Please enter a number between 8 and 128.";
        isGood = false;
      } else if (userLength < 8) {
        userLengthErrorMessage = "Length must be at least 8.";
        isGood = false;
      } else if (userLength > 128) {
        userLengthErrorMessage = "Length can be no greater than 128.";
        isGood = false;
      }
      document.getElementById("passwordLengthError").textContent = userLengthErrorMessage;

      //if no errors thrown it calls "generateRandomString" and then prints the result
      var generatedPasswordMessage = "";
      if (isGood) {
        generatedPasswordMessage = generateRandomString(userLength, passwordCharacters);
      }

      document.getElementById("generatedPasswordMessage").textContent = generatedPasswordMessage;
    }

    //generates a random string based on user-specified length and character set
    function generateRandomString(length, charset) {
      var randomString = "";
      //null check
      if (charset && charset.length > 0) {
        for (var i = 0; i < length; i++) {
          randomString += charset.charAt(Math.floor(Math.random() * charset.length));
        }
      }
      return randomString;
    };