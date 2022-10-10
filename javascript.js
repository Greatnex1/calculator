"use strict";

var input = document.getElementById('input') // input/output button
var number = document.querySelectorAll('.numbers div') // number buttons
var operator = document.querySelectorAll('.operators div') // operator buttons
var  result = document.getElementById('result') // equal button
var clear = document.getElementById('clear') // clear button 
var  resultDisplayed = false; // flag to keep an eye on what output is displayed
        
///adding click handlers to number  buttons

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click',function(e){

        var  currentString =  input.innerHTML;
        var lastChar  =  currentString[currentString.length  -1]

          // if result is not diplayed, just keep adding
        if(resultDisplayed  === false){
            input.innerHTML +=  e.target.innerHTML;
        }  else  if(resultDisplayed  === true &&  lastChar === "+" || lastChar === "-" ||
        lastChar  === "x" || "÷"){

            resultDisplayed =  false;
            input.innerHTML += e.target.innerHTML

        }   
        else{
            resultDisplayed = false;
            input.innerHTML =  "";
            input.innerHTML +=  e.target.innerHTML
        }     
    });
    
}

//adding click handlers  to  number  buttons

for(var i  =  0;  i< operator.length; i++){
    operator[i].addEventListener("click", function(e){

        var  currentString =  input.innerHTML;
        var lastChar  =  currentString[currentString.length  -1]

            // if last character entered is an operator, replace it with the currently pressed one

            if(lastChar === "+" || lastChar === "-" || lastChar  === "x" || "÷"){       
                var newString =  currentString.substring(0, currentString.length -1) + e.target.innerHTML;
                input.innerHTML =  newString;

            } else  if(currentString.length ==   0){
                console.log("Enter a number  first");
            } else{
                input.innerHTML   += e.target.innerHTML;
            }
    });

}
//  on click 'equal' button
result.addEventListener("click", function(){
    // processing string eg. -10+26+35-56*34/23
    var inputString  = input.innerHTML

     // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
     var  numbers = inputString.split(/\+|\-|\÷/g);

      // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
// first,  replace all  nnumbbers with empty string and split

var operators  =inputString.replace(/[0/9]|\./g,"").split(" ") ;


console.log(inputString);
console.log(operators);
console.log(numbers);
console.log("----------------------------");

// loopinng through the array and doing one operation at a time
// firstly, divide, then multiply, substraction  and lastly,addition
// originnal numbers  annd operator array are been alternated as we move through
// the final element remaining in the asrray will be the output

var divide = operators.indexOf("÷")
while (divide != 1){
    numbers.splice(divide,2,numbers[divide]/  numbers[divide + 1]);
    operators.splice(divide,1);
    divide = operators.indexOf("÷")
}


var multiply = operators.indexOf("x")
while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply]* numbers[multiply + 1]);
    operators.splice(multiply,1);
    multiply = operators.indexOf('x')
}

var substraction = operators.indexOf("-")
while(substraction != -1){
    numbers.splice(substraction, 2, numbers[substraction] - numbers[substraction + 1]);
    operators.splice(substraction,1);
    substraction = operators.indexOf("-")
}
var add = operators.indexOf("+")
while(add != -1){
    numbers.splice(add, 2, numbers[add] - numbers[add + 1]);
    operators.splice(add,1);
    substraction = operators.indexOf("+")
}
input.innerHTML = numbers[0]; //displayinng output

resultDisplayed =  true;



//clearinng input on  press clear
clear.addEventListener("click",  function(){
    input.innerHTML =  " "
})

});