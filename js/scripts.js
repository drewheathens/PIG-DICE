
function rollDice() {
  var player1 = {
    firstName:"";
    secondName:"";
    score:(die1 + die2);
  }
  var player2 = {
    firstName:"";
    secondName:"";
    score:(die1 + die2);    
  }
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

}
