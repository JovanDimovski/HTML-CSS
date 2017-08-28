//Use this file to implement Part One of your project
console.log('callbacks');


var funcCaller = function (func,arg){

    return func(arg);
}

funcCaller(function(arg){console.log("Arg is: "+arg)},"TEST");

var firstVal = function(func, arr)
{
    func(arr[0],0,arr);}

firstVal(function(arg1,arg2,arg3){console.log("Arg1 is: "+arg1,"Arg2 is: "+arg2,"Arg3 is: "+arg3,)},["AA","BB"]);

var firstValObj = function(func, obj)
{
    if(Array.isArray(obj)){
        func(arr[0],0,arr);
    }
    else{
        var keys = Object.keys(obj);
        func(keys[0],keys[1],obj);
    }
}

firstValObj(function(arg1,arg2,arg3){console.log("Arg1 is: "+arg1,"Arg2 is: "+arg2,"Arg3 is: "+arg3,)},{"AA":"AA","BB":"BB"});

var runOnce = function(){
    var count = 0;
    //var money = 10000;
    var counter = function(){
        count++;
    }

    return function(funcToRun,funds,sub) {
        if(count === 0){
            counter();
            console.log(funcToRun(funds,sub));
        }
        else{
            console.log("NISTO");
        }
    }
}

var rO = runOnce();
function processPaymentOnce(funds,sub){
    funds-=sub;
    
    return funds;
};

rO(processPaymentOnce,10000,200);
rO(processPaymentOnce,10000,200);
rO(processPaymentOnce,10000,200);

/*
#Callback Exercises

    Write a function, funcCaller, that takes a func (a function) and an arg (any data type). The function returns the func called with arg(as an argument).

    Write a function, firstVal, that takes an array, arr, and a function, func, and calls func with the first index of the arr, the index # and the whole array.

    Change firstVal to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.

    [Extra Credit] Write a function, once, (see: http://underscorejs.org/#once) that takes a function and returns a version of that function which can only be called once. [Hint: you need a closure] You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:

  var chargeCreditCard = function(num, price){
    //charges credit card for a certain price
  };
  var processPaymentOnce = once(chargeCreditCard);
  processPaymentOnce(123456789012, 200);

*/