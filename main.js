document.getElementById("score").innerHTML = 0;
var score = 0;
var guesses = 3;
var num1;
var num2;


function (num1,operators, num2){
	this.num1 = num1;
	this.num2 = num2;
	this.operators = operators;


var operators = [{
        sign: "+",
        method: function(num1,num2){ return num1 + num2; }
     ,{
        sign: "-",
        method: function(num1,num2){ return num1 - num2; }
     ,{
        sign: "*",
        method: function(num1,num2){ return num1 * num2; }
	 ,{
        sign: "/",
        method: function(num1,num2){ return num1 / num2; }

    }];

var randOperator = Math.floor(Math.random()*operators.length);

}

function RandomNumber(){

	return Math.floor(Math.random() * (Math.floor(1000000) - Math.ceil(1))) + Math.ceil(1);
}

var num1 = RandomNumber();
var num2 = RandomNumber();