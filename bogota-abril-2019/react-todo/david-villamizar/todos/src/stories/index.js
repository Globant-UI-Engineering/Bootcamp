import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Todo from "../components/Todo";
import Todos from "../components/Todos";

const EDITABLE_TODO_STORE = new Store({
  title: "",
  checked: false,
});

storiesOf("Todo", module)
  .add("default", () => (
    <Todo
      onCheckedChange={action("onCheckedChange")}
      onTitleChange={action("onTitleChange")}
    />
  ))
  .add("with title", () => (
    <Todo
      title="Add redux"
      onCheckedChange={action("onCheckedChange")}
      onTitleChange={action("onTitleChange")}
    />
  ))
  .add("checked", () => (
    <Todo
      checked={true}
      onCheckedChange={action("onCheckedChange")}
      onTitleChange={action("onTitleChange")}
    />
  ))
  .add("editable title and check", () => (
    <State store={EDITABLE_TODO_STORE}>
      <Todo
        onCheckedChange={e => {
          EDITABLE_TODO_STORE.set({ checked: e });
          action("onCheckedChange");
        }}
        onTitleChange={e => {
          EDITABLE_TODO_STORE.set({ title: e });
          action("onTitleChange");
        }}
      />
    </State>
  ));

const TODOS = Array(10)
  .fill(0)
  .map((v, i) => ({ title: `Task ${i}`, checked: i % 2 === 0 }));

storiesOf("Todos", module)
  .add("all tasks", () => <Todos todos={TODOS} filterType="all" />)
  .add("done tasks", () => <Todos todos={TODOS} filterType="done" />)
  .add("pending tasks", () => <Todos todos={TODOS} filterType="pending" />);
