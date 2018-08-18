class Task {
  constructor(title, responsibleName, description, priority) {
      this.title=title;
      this.responsibleName=responsibleName;
      this.description=description;
      this.priority=priority;
      this.completed=false;
  }
}

export default Task;
