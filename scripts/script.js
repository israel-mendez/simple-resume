function rateGood() {
  var btn = document.getElementsByClassName("rate-button")[0];
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
    alert("Thank you for rating this page as good!");
  }, 200);
}

function rateBad() {
  var btn = document.getElementsByClassName("rate-button")[1];
  btn.classList.add("pressed");
  setTimeout(function() {
    btn.classList.remove("pressed");
    alert("We're sorry to hear that you didn't enjoy this page. Please provide us with feedback on how we can improve it.");
  }, 200);
  
}