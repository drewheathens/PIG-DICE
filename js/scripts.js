// $(document).ready(function() {
//   $("h1#pig-dice")
// function rollDice() {
//
//   var d1 = Math.floor(Math.random() * 6) +1;
  // // var status = #status;
  // var dieTotal = d1 + d1;
  // alert('you rolled' + d1)

   // $("#status")= "rolled" + dieTotal + ".";
 // }

   // if (d1 == 1) {
   //  #status += hold;
   //  alert("player2 to play")
   //  }
   //   else if(d1 == d1) {
   //  #status += "free turn"
   //  }
  // });
function rollDice() {
  var die1=document.getElementById('die1');
  var die2=document.getElementById('die2');
  var status = document.getElementById('status');
  var Die1= Math.floor(Math.random() * 6) +1;
  var Die2= Math.floor(Math.random() * 6) +1;
  var total= die+die;
  die1.innerHTML = Die1;
  die2.innerHTML = Die2;
  status.innerHTML "played" + total;
  if(die1==die2) {
    status.innerHTML += "free turn buddy!"
  }
  event.preventDefault();
}
