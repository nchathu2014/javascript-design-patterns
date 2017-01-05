/**
 * Command Pattern
 */


//Command
var Calculator = function(){
    this.execute = function(fn,num1,num2){
        if(this[fn]){
            var result = this[fn](num1,num2);
            console.log("ANSWER : "+result);
        }
        else{
            console.info("Invalid Function");
        }
    };
};


//Receivers
Calculator.prototype.add = function(num1,num2){
    return num1+num2;
};

Calculator.prototype.sub = function(num1,num2){
    return num1-num2;
};

Calculator.prototype.mul = function(num1,num2){
    return num1*num2;
};

Calculator.prototype.div = function(num1,num2){
    if(num2!==0){
        return num1/num2;
    }else{
        console.log("Divide By Zero");
    }
};




//Invoker
var ins = new Calculator();
ins.execute('add',2,3);
ins.execute('sub',2,3);
ins.execute('mul',2,3);
ins.execute('div',2,0);
