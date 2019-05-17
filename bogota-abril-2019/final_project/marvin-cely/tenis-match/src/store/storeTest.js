import { observable, decorate } from "mobx";

class Todo {
  id = Math.random();
  title = "Holiiiii";
  finished = false;
}
decorate(Todo,{
  title: observable,
  finished: observable
});

const todo = new Todo();

export default todo;