$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var inputStr = $("#numberInput").val();
    var outputStr = produceOutput(inputStr);

    //add text w/o fade if numbers, beep, or boop
    if (!(/sorry/.test(outputStr))) {
      $(".hal").html("");
      $(".convoElement").hide();
      $("#output").text("All numbers up to your input: " + outputStr);


      //also find all prime numbers less than input value
      var primeStr = returnPrimes(parseInt(inputStr));
      $("#outputPrime").text("All prime numbers up to your input: " + primeStr);
    } else { //if divisible by three, add HAL effects and conversation
      $(".formSection").hide();
      $(".hal").html("<img src='img/hal.png'>");
      $("#outputPrime").text("");
      $("#output").html("<h3>" + outputStr + "</h3>");
      $(".convoElement").hide();
      $("#convo1").fadeIn(1000);
      $("#button1, #nvmButton1").show();
    }
  });

  $(".nvmButton").click(function(event) {
    location.reload();
  });

  $(".contButton").click(function(event) {
    $("#output").text("");
    $(this).parent().hide();
    $(this).parent().next().fadeIn(1000, function() {
      $(this).children().fadeIn(1000);
    });
  });

  $("#button7").click(function(event) {
    $("body").text("");
  });

//pass mouse position as variables accessible in CSS
  document.addEventListener('mousemove', function(event) {
    var posx = event.pageX - $(window).width()/2;
    var posy = event.pageY - $(window).height()/2;
    document.documentElement.style.setProperty('--posx', posx);
    document.documentElement.style.setProperty('--posy', posy);
  })
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
    var outputStr = outputArr.join(", ");
    return outputStr;
  }
}


//function to return result containing only prime numbers
var returnPrimes = function(parameter) {
  //create array containing 2-parameter
  var lessThan = [];
  for (var i=0; i<parameter-1; i++) {
    lessThan[i]=i+2;
  }
  //remove primes
  for (var factor = 2; factor<parameter; factor++) {
    for (var j = 0; j<lessThan.length; j++) {
      if (lessThan[j]!=factor && (lessThan[j]%factor)===0) {
        lessThan[j]=0;
      }
    }
  }
  //remove 0s
  var resultArray = [];
  for (var k=0; k<lessThan.length; k++) {
    console.log(lessThan[k]);
    if (lessThan[k]!=0) {
      resultArray.push(lessThan[k]);;
      // lessThan.pop(k);
    }
  }
  var resultStr = resultArray.join(", ");
  return resultStr;
}
