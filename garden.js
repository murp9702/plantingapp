
//Problem: Need to add days to a date to calculate harvest Date
//solution: Convert days into milli seconds and add to current date


// 1) retrieve current date
var d = new Date();
document.getElementById("textOutput").innerHTML = d;
// 2) capture DTM from user input


$( "#submit").click(function() {
  var input = document.getElementById("dtm").value;
  var newest = input * 1;


  //  2.1) convert days to maturity (DTM) to mil secs since 01/01/1970

  var dayConverter = (input * 86400000);
  var dateInMS = d.getTime();

  //  2.2) add days in mil secs to current date

  var newDate = dateInMS + dayConverter;

  // 3)Output expected harvest date

  var dateUpdate = new Date(newDate);




  document.getElementById("dateOutput").innerHTML = dateUpdate;
  document.getElementById("test").innerHTML = (newest).days().fromNow();
});
