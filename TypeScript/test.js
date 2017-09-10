var A = /** @class */ (function () {
    function A() {
        console.log("In constructor");
    }
    A.testFunc = function () {
        return "Hello" + this.greeting;
    };
    return A;
}());
A.testFunc();
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('engines started ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('engines stoped ' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
var num = 2; //type inference on assignement
//from here on it is assumed that num is type number
var num2 = 2; //no inference needed, is declared as number
var anyType; //can be any type
var anytype2 = num + "some string"; //will work(num is concatenated) with some string
//var num3: number = num + "String";//will not work
function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    console.log("Result: " + result);
    return result;
}
addNumbers(1, 2, 3);
addNumbers(1, 2, "some string"); //Will accept any parameter
function addNumbersStrict(n1, n2, n3) {
    var result = n1 + n2 + n3;
    console.log("Result: " + result);
    return result;
}
addNumbersStrict(1, 2, 3);
//addNumbersStrict(1,2,"some string");//accepts only numbers 
//# sourceMappingURL=test.js.map