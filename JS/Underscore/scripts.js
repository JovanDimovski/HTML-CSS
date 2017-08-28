//Use this file to implement Part One of your project
console.log('underscore');

var arr = ["AA","BB","CC"];
_.each(arr,function(v,i,arr){
    console.log(v);
})

var checkValue = function (arr,value) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if(arr[i] === value)
        {
            return true;
        }
    }
    return false;
}
console.log(checkValue(arr,"AA"),"AA");
console.log(checkValue(arr,"DD"),"DD");

var checkSValue = function (v,i,a) {
    var is = false;
    if("AA" === v)
    {
        is = true;
    }
    console.log(v,i,a, is);
}
_.each(arr,checkSValue);

var oarr = [];
var obj = {"AA":"BB","CC":"DD"}
for(var key in obj){
    oarr.push(obj[key]);
}

console.log(obj, oarr);


var oarr = [];
var obj = {"AA":"BB","CC":"DD"}

oarr = _.map(obj,function(num,key){return num;})

console.log("MAP: ",obj, oarr);


var arr = [9,8,7,6,5,2];
var parni=[];
parni = _.filter(arr, function(num){
    if(num%2 === 0)
        return num;
    });

console.log("FILTER: ",parni);

var mult = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);

console.log("MULT: ",mult);

var string = _.reduce(['x','y','z'], function(memo, num){ return memo + num; });

console.log("string: ",string);

var congratulations = _.reduce( ['Steve', 'Sally', 'George', 'Gina'], function(memo, num){ return memo + num+", "; }, "Congratulations ");
congratulations = congratulations.substring(0, congratulations.length - 2);
congratulations+="!";
console.log("congratulations: ",congratulations);

var myPluck = function(obj, propName){
    return obj[propName];
}  

console.log("Pluck AA:",myPluck({"AA":"BB","CC":"DD"},"AA"));

var arr = ["ZA","CA","ZB","BB"];
var startswithz=[];
startswithz = _.filter(arr, function(str){
    if(str.charAt(0)  === "Z")
        return str;
    });

console.log("All: ", arr,"FILTER: ",startswithz);

var farm =[ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
            {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
            {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
            {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ];
console.log("Space 3: ",_.where(farm, {space: 3}));


/*

##Underscore exercises

    Use _.reduce to multiply all the values in an array.

    Use _.reduce to concatenate all strings in an array.

     input: ['x','y','z']
     output: 'xyz'

    Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.

     input: ['Steve', 'Sally', 'George', 'Gina']
     output: 'Congratulations Steve, Sally, George, Gina!'

    _.pluck takes an object and a property name and returns the property name's value. Write your own version called myPluck.

     myPluck = function(obj, propName){
        //fill in here
     }  

    Use _.filter to return all strings in an array that start with the letter 'Z'.

    Use _.where on your farm animals from the lecture slides to return all animals who contain the value 3 at the property name space.

     input: [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
            {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
            {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
            {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ]
            
     output: [{speak: function, name: "Tiger3", space: 3},  
            {speak: function(){}, name: "Tiger4", space: 3}] 

*/