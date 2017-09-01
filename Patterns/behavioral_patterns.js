console.log('BEHAVIORAL PATTERRNS');

/*
Asignement of responsibilities between objects and how they comunicate
-they help objects cooperate with eachother
-assign clear hierarchy
-can encapsulate requests between objects

1.Observer pattern
- allows a collection of objects to watch an object and be notified of changes
-allows for loosely coupled system
-one object is focal point
-group of objects watch for changes
*/
/*
var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}
Task.prototype.complete = function(){
	console.log('completing task ' + this.name);
	this.completed =true;
}
Task.prototype.save = function(){
	console.log('saving task ' + this.name);
}



var notificationService = function () {
	var message = "Notifying ";
	this.update = function(task){
		console.log(message + task.user + "for task " + task.name);
	}
};
var loggingService = function () {
	var message = "Logging ";
	this.update = function(task){
		console.log(message + task.user + "for task " + task.name);
	}
};
var auditingService = function () {
	var message = "Auditing ";
	this.update = function(task){
		console.log(message + task.user + "for task " + task.name);
	}
};



function ObserverList(){
	this.observerList = [];
}
ObserverList.prototype.add = function(obj){
	return this.observerList.push(obj);
};
ObserverList.prototype.get = function(index){
	if(index > -1 && index <this.observerList.length){
		return this.observerList[index];
	}
};
ObserverList.prototype.count = function(index){
	return this.observerList.length;
};



var ObservableTask = function (data) {
	Task.call(this,data);
	this.observers = new ObserverList();
};
ObservableTask.prototype.addObserver = function(observer){
	this.observers.add(observer); 
};
ObservableTask.prototype.notify = function(context){
	var observerCount = this.observers.count();
	for (var i = 0; i < observerCount; i++) {
		this.observers.get(i)(context);
	}
};
ObservableTask.prototype.save = function(){
	this.notify(this);
	Task.prototype.save.call(this);
};




var task1 = new ObservableTask({name:"1.Task",user:"john"});

var nS = new notificationService();
var lS = new loggingService();
var aS = new auditingService();

task1.addObserver(nS.update);
task1.addObserver(lS.update);
task1.addObserver(aS.update);

task1.save();
*/

/*
2.Mediator Pattern
-Allows for loosely coupled system
-one object manages all comunication
-allows for many to many comunivation
*/

var Task = function(data){
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}
Task.prototype.complete = function(){
	console.log('completing task ' + this.name);
	this.completed =true;
}
Task.prototype.save = function(){
	console.log('saving task ' + this.name);
}

var notificationService = function () {
	var message = "Notifying ";
	this.update = function(task){
		console.log(message + task.user + " for task " + task.name);
	}
};
var loggingService = function () {
	var message = "Logging ";
	this.update = function(task){
		console.log(message + task.user + " for task " + task.name);
	}
};
var auditingService = function () {
	var message = "Auditing ";
	this.update = function(task){
		console.log(message + task.user + " for task " + task.name);
	}
};

var mediator = (function(){
	var channels = {};
	var subscribe = function(channel, context, func){
		if(!mediator.channels[channel]){
			mediator.channels[channel] = [];
		}
		mediator.channels[channel].push({
			context: context,
			func: func
		})
	}
	var publish = function (channel) {
		console.log('Objavavuvam kanal: ' + channel);
		if(!this.channels[channel]){
			return false;
		}
		var args = Array.prototype.slice.call(arguments,1);
		for(var i=0;i<mediator.channels[channel].length;i++)
		{
			var sub = mediator.channels[channel][i];
			sub.func.apply(sub.context,args);//mozno e apply da e isto kako call??
		}

	}
	return{
		channels: {},
		subscribe: subscribe,
		publish: publish
	};
}());

var task1 = new Task({name:"1.Task",user:"john"});


// I. kreirame funkcii so kontekst koi sodrzat vnatresna funkcija
var nS = new notificationService();
var lS = new loggingService();
var aS = new auditingService();

// II. Vnatresno vo medijatorot gi dodavame vo
mediator.subscribe('complete',nS, nS.update);
mediator.subscribe('complete',lS, lS.update);
mediator.subscribe('complete',aS, aS.update);

mediator.subscribe('A',nS, nS.update);
mediator.subscribe('A',lS, lS.update);
mediator.subscribe('A',aS, aS.update);


task1.complete = function(){
	mediator.publish('complete',this);
	mediator.publish('A',this);
	Task.prototype.complete.call(this);
}

task1.complete();

