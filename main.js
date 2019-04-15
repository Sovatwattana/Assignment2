
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var operator = document.querySelector("#operator");
function numx(){
  let x = Math.floor((Math.random() * 100) + 1);
  num1.innerHTML = x;
  return x;
}
function numy(){
  let y = Math.floor((Math.random() * 10) + 1);
  num2.innerHTML = y;
  return y;
}


var input1 = document.querySelector("#answer").value;
var input = Number(input1);
var score1 = document.querySelector('#score').textContent;
var score = Number(score1);



function createOperand(){
  let operators = ['+', '-', '/','*'];
  let rndOperator = operators[Math.floor(Math.random() * operators.length)];
  operator.innerHTML = rndOperator;
  return rndOperator;
}
var rndOperator = createOperand();
var x = numx();
var y = numy();




var Result = function (){}

Result.prototype.add = function(x,y){
  return x+y;
}
Result.prototype.sub = function(x,y){
  return x-y;
}
Result.prototype.div = function(x,y){
  return x/y;
}
Result.prototype.mult = function(x,y){
  return x*y;
}
Result.prototype.evaluate = function(data,input){

  if (input == data) {
    document.querySelector("#message").innerHTML = "Correct";
    console.log('equal');

  } else if(input == 0) {
    document.querySelector("#message").innerHTML = " ";
    console.log('empty');
  }else{
    document.querySelector("#message").innerHTML = "Wrong";
    console.log('empty');
  }
  //console.log(input);
}
Result.prototype.win = function(data,input){
  if(input==data){
    score = score + 5;
    document.getElementById('score').innerHTML = `${score}`;
    //console.log(score);

  }
}
Result.prototype.lose = function(data,input){
  if(input!==data){
    score = score - 5;
    document.getElementById('score').innerHTML = `${score}`;
    //console.log(score);

  }
}



function operatorFunc(val){

  var input1 = document.querySelector("#answer").value;
  var input = Number(input1);
  switch(val) {
    case '+':
      var myResult = new Result(x,y);
      var data = myResult.add(x,y);
      myResult.evaluate(data,input);
      if(input==data){
        myResult.win(data,input);
      }else if(input==0){
        score;
      }else{
        myResult.lose(data,input);
      }
      break;
    case '-':
      var myResult = new Result(x,y);
      var data = myResult.sub(x,y);
      myResult.evaluate(data,input);
      if(input==data){
        myResult.win(data,input);
      }else if(input==0){
        score;
      }else{
        myResult.lose(data,input);
      }
      break
    case '/':
      var myResult = new Result(x,y);
      var data = myResult.div(x,y);
      myResult.evaluate(data,input);
      if(input==data){
        myResult.win(data,input);
      }else if(input==0){
        score;
      }else{
        myResult.lose(data,input);
      }
      break;
    case '*':
      var myResult = new Result(x,y);
      var data = myResult.mult(x,y);
      myResult.evaluate(data,input);
      if(input==data){
        myResult.win(data,input);
      }else if(input==0){
        score;
      }else{
        myResult.lose(data,input);
      }
      break;
    default:

  }
   console.log("first x:" +x);
   console.log("first y:" +y);
   console.log("result is: "+data);
   console.log("input is: "+input);

   rndOperator=createOperand();
   x = numx();
   y = numy();
   operator.innerHTML = rndOperator;
   input = document.querySelector('#answer').value = " ";
   window.localStorage.setItem("score", score);
   score = Number(window.localStorage.getItem("score"));



}

function skipFunc(){
  rndOperator=createOperand();
  x = numx();
  y = numy();
  operator.innerHTML = rndOperator;
  input = document.querySelector('#answer').value = " ";

}


 window.onload = function(){
   score = Number(window.localStorage.getItem("score"));
   document.getElementById('score').innerHTML = `${score}`;
 };
