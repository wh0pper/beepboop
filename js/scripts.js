$(document).ready(function() {
  $("#formInput").submit(function(event) {
    event.preventDefault();
    var inputStr = $("#numberInput").val();
    var outputStr = produceOutput(inputStr);

    //add text w/o fade if numbers, beep, or boop
    if (!(/sorry/.test(outputStr))) {
      $(".formSection > h2").text("Computer's Output:");
      $(".hal").html("");
      $(".convoElement").hide();
      $("#output").text(outputStr);
    } else { //if divisible by three, add HAL effects and conversation
      $(".formSection > h2").text("");
      $(".hal").html("<img src='img/hal.png'>");
      $("#output").html("<h3>" + outputStr + "</h3>");
      $(".convoElement").hide();
      $("#convo1").fadeIn(1000);
      $("#button1, #nvmButton1").show();
    }
  });

  $("#button1").click(function(event) {
    $("#output").text("");
    $(".convoElement#convo1").hide();
    $("#convo2").fadeIn(1000, function() {
          $("#button2").fadeIn();
          $("#nvmButton2").fadeIn();
    })
  });

  $(".nvmButton").click(function(event) {
    console.log("nevermind");
    $(".hal").html("");
    $(".convoElement").hide();
    $("#output").text("");
  });

  $("#button2").click(function(event) {
    $("#output").text("");
    $(".convoElement#convo2").hide();
    $("#convo3").fadeIn(1000, function() {
          $("#button3").fadeIn();
          $("#nvmButton3").fadeIn();
    })
  });

  $("#button3").click(function(event) {
    $("#output").text("");
    $(".convoElement#convo3").hide();
    $("#convo4").fadeIn(1000, function() {
          $("#button4 #nvmButton4").fadeIn();
    })
  });

  $("#button4").click(function(event) {
    $("#output").text("");
    $(".convoElement#convo4").hide();
    $("#convo5").fadeIn(1000, function() {
          $("#button5, #nvmButton5").fadeIn();
    })
  });

  $("#button5").click(function(event) {
    $("#output").text("");
    $(".convoElement#convo5").hide();
    $("#convo6").fadeIn(1000, function() {
          $("#button6, nvmButton6").fadeIn();
    })
  });

  $("#button6").click(function(event) {
    $("#output").text("");
    $(".convoElement#convo6").hide();
    $("#convo7").fadeIn(3000, function() {
      $("body").html("");
    })
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
