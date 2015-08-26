var TodoList = function() {
  counter = 0
  this.tasks = []
  this.add = function(item){
    this.tasks.push(new Task(item))
  };
  this.list = function(){
    console.log(this.tasks)
  }
};

counter = 0
var Task = function(item){
  counter +=1
  this.id = counter
  this.description = item
  this.completed = false;
}

Task.prototype.complete = function(){
  this.completed = true
}
// var TodoList = newTodoList();
TodoList.prototype.remove = function(task){
  for(i=0; i< this.tasks.length; i++){
    if(task === this.tasks[i]) {
      this.tasks.splice(i, 1)
    }
  }
}


// Driver code// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// // tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

// groceryList.list();
// //> Task {id: 1, description: 'bread', completed: false}
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}


// // // getting a task object
var breadTask = groceryList.tasks[0];

// console.log(breadTask.id) //-> 1 (some unique numerical ID)
// console.log(breadTask.description) //-> 'bread'
// console.log(breadTask.completed) //-> false


// // // This should complete the task
// breadTask.complete();
// console.log(breadTask.completed)

// // breadTask.completed //-> true

// groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// // This should remove the task from the todo list
groceryList.remove(breadTask);
// console.log(groceryList.tasks[0])
// console.log(breadTask)
console.log("**********")
groceryList.list();
// //> Task {id: 2, description: 'cheese', completed: false}
// //> Task {id: 3, description: 'milk', completed: false}




