$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var inputStr = $("#numberInput").val();
    var outputStr
  });


});

//function to determine if input is divisible by 3
var divisibleThree = function(numStr) {
  var num = parseInt(numStr);
  if (num%3===0) {
    return true;
  } else {
    return false;
  }
}

//function to determine if input contains a 1
var containsOne = function(numStr) {
  return (/1/.test(numStr));
}

//function to determine if input contains a 0
var containsZero = function(numStr) {
  return (/0/.test(numStr));
}

//function takes input, determines if specifications apply, returns appropriate output
var produceOutput = function(numStr) {
  if (divisibleThree(numStr)) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (containsOne(numStr)) {
    return "Boop!"
  } else if (containsZero(numStr)) {
    return "Beep!"
  } else {
    var num = parseInt(numStr);
    var outputArr = [];
    for (var i = 0; i <= num; i++) {
      outputArr[i] = i;
    }
    var outputStr = outputArr.join("");
    return outputStr;
  }
}
