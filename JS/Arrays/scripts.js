//Use this file to implement Part One of your project
console.log('arrays');

var noisearray = [];
noisearray.push("Moo");
console.log(noisearray.length);
noisearray.unshift("Baa");
console.log(noisearray.length);
noisearray["another"]="Bark";
console.log(noisearray.length);
console.log("LAST INDEX: "+(noisearray.length-1));
var animal = {};

console.log(noisearray);

console.log(animal);
animal.username = "Daffy";
animal.tagline = "Yipeeee";

console.log(animal);
animal.noises = noisearray;

console.log(animal);

var animals = [];
animals.push(animal);
var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };
animals[1] = quackers;

console.log(animals.length);
console.log(animals);
var cat = { username: 'kitty', tagline: 'meauza!', noises: ['meaw'] };
var dog = { username: 'doggy', tagline: 'arfarf!', noises: ['bark'] };

animals.push(cat);
animals.push(dog);

console.log(animals.length);
console.log(animals);

var x= function(){return 1+1;}
animals.x = x;
console.log("Print function. animals.x:" + animals.x);
console.log("Print Result. animals.x(): " + animals.x());