class toDo {

  constructor(task, isComplete){
    this.task = task;
    this.isComplete = isComplete || false;
  }
}

module.exports = toDo;
