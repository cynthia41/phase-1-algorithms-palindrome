
function isPalindrome(word) {
  let polishedString = word;
  let reversedString = polishedString.split("").reverse().join("");
    console.log(polishedString,reversedString);
    if (reversedString === polishedString) {
     return true; }
     if (polishedString != reversedString) {
     return false;
  }
}

if (require.main === module) {
  // add your own custom tests in here
 

  console.log("");
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  
}

module.exports = isPalindrome;
