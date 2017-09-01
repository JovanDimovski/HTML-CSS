//CREATIONAL DESIGN PATTERNS


//STRUCTURAL DESIGN PATTERNS
/*--deal with relationship of objects
1.decorator
-wraps an object
-protect existing object
-wrap with additional features without modifying original
*/

/*--------------------------------------------------------------------*/

/*SIMPLE DECORATION --- kreirame samo nova instanca od objekt 
i dodavame svojstva i metodi koi ni trebaat, mislam funkcionira 
samo so edna instanca*/

/*

var Task = function(name){
	this.name =name;
	this.compleated = false;
}

Task.prototype.complete = function(){
	console.log('completing task ' + this.name);
	this.completed =true;
}


Task.prototype.save = function(){
	console.log('saving task ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function () {
	console.log('notifying important people');
}
urgentTask.complete();
urgentTask.save = function () {
	this.notify();
	Task.prototype.save.call(this);
}

urgentTask.save();
*/

/*--------------------------------------------------------------------*/

/*Complicated decoration ---- generira nova klasa koja nasleduva od 
predhodnata so pomos na prototype, potoa mozeme da instancirame 
kolku objekti sakame*/
/*var Task = function(name){
	this.name =name;
	this.compleated = false;
}

Task.prototype.complete = function(){
	console.log('completing task ' + this.name);
	this.completed =true;
}


Task.prototype.save = function(){
	console.log('saving task ' + this.name);
}

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function (name, priority) {
	Task.call(this, name);
	this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function () {
	console.log('notifying important people');
}
UrgentTask.prototype.save = function () {
	this.notify();
	console.log('Do special stuff before saving')
	Task.prototype.save.call(this);
}
var uTask = new UrgentTask('This is urgent', 1);
uTask.complete();
uTask.save();
console.log(uTask);*/

/*--------------------------------------------------------------------*/

/*
2.facade
-used to provide a simplified interface to a complicated system
-facade hides the complexity of the backend system
-jQuery is the most famous implementation of 
the facade pattern. It sits on top of the DOM and gives simple clean 
nterface for interacting with the DOM

-DIFFERENCE between DECORATOR and FACADE pattern is that we DONT ADD 
any new functionality in the facade pattern
*/

/*--------------------------------------------------------------------*/

/*
var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

var TaskService = function(){
	return{
		complete:function(task){
			task.completed = true;
			console.log('completing task: ' + task.name);
		},
		setCompleteDate:function(task){
			task.completedDate = new Date();
			console.log(task.name + " completed on" + task.completedDate);
		},
		notifyCompletion:function(task){
			console.log('Notifying ' + task.user + ' of the completion of ' + task.name)
		},
		save:function(task){
			console.log('saving Task: ' + task.name)
		}
	}
}();


//TaskServiceWrapper e modul od REVEALING MODULE pattern.
//(TaskService mislam MODULE pattern)

var TaskServiceWrapper = function(){
	var completeAndNotify = function(task){
		TaskService.complete(myTask);
		if(myTask.completed == true){
			TaskService.setCompleteDate(myTask);
			TaskService.notifyCompletion(myTask, myTask.user);
			TaskService.save(myTask);
		}
	}
	return {
		completeAndNotify: completeAndNotify
	}
}();//Ne sum siguren sto e razlikata megju ova i ***

var myTask = new Task({
	name: 'myTask',
	priority: 1,
	project: 'Courses',
	user: 'Jon', 
	completed: false
})

TaskServiceWrapper//.() ova
.completeAndNotify(myTask);

console.log(myTask);
*/


/*
3.flyweight
- our tasks have a lot non unique data
- allows sharing data between objects
(same data for parts of different obects)
-reduces memory footprint
-only usfull if you have a large number 
of objects

*/
/*
var Task = function(data){
	this.name = data.name;
	this.flyweight = FlyweightFactory.get(data.project,data.priority,data.user,data.completed);
	// this.priority = data.priority;
	// this.project = data.project;
	// this.user = data.user;
	// this.completed = data.completed;
}

function TaskCollection(){
	var tasks = {};
	var count = 0;
	var add = function(data){
		tasks[data.name] = new Task(data);
		count++;
	}
	var get = function (name){
		return tasks[name];
	}
	var getCount = function(){
		return count;
	}
	return{
		add: add,
		get: get,
		getCount:getCount
	};
}

function Flyweight(project,priority,user,completed){
	this.project = project;
	this.priority = priority;
	this.user = user;
	this.completed = completed;
}

var FlyweightFactory = function(){
	var flyweights = {};

	var get = function (project,priority,user,completed) {
		if(!flyweights[project + priority + user + completed]){
			flyweights[project + priority + user + completed] = new Flyweight(project,priority,user,completed);
		}
		return flyweights[project + priority + user + completed];
	};
	var getCount = function(){
		var count = 0;
		for(var f in flyweights){
			count++;
			console.log(f);
		}
		return count;
	}
	return {
		get: get,
		getCount: getCount
	}
}();

var tasks = new TaskCollection();

var projects = ["A","B","C","D"];
var priorities = [1,2,3,4,5];
var users = ["A","B","C","D"];
var completed = [1,2];

var initialMemory = window.performance.memory.usedJSHeapSize;
//Raboti samo vo chrome so flag --enable-precise-memory-info

//console.log(initialMemory);

for(var i=0;i<100000;i++){
	tasks.add({
		name: 'task'+i,
		project: projects[Math.floor((Math.random()*4))],
		priority: priorities[Math.floor((Math.random()*5))],
		user: users[Math.floor((Math.random()*4))],
		completed: completed[Math.floor((Math.random()*2))],
	})
}


var afterMemory = window.performance.memory.usedJSHeapSize;
//Raboti samo vo chrome so flag --enable-precise-memory-info

//console.log(afterMemory);
console.log('used memory: '+Math.floor((afterMemory-initialMemory)/1024)+"KB");

console.log('tasks: ' + tasks.getCount());
console.log('flyweights: ' + FlyweightFactory.getCount());

*/