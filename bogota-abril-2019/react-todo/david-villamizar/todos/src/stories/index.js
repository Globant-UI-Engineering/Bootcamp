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
      onChangeChecked={action("onChangeChecked")}
      onChangeTitle={action("onChangeTitle")}
    />
  ))
  .add("with title", () => (
    <Todo
      title="Add redux"
      onChangeChecked={action("onChangeChecked")}
      onChangeTitle={action("onChangeTitle")}
    />
  ))
  .add("checked", () => (
    <Todo
      checked={true}
      onChangeChecked={action("onChangeChecked")}
      onChangeTitle={action("onChangeTitle")}
    />
  ))
  .add("editable title and check", () => (
    <State store={EDITABLE_TODO_STORE}>
      <Todo
        onChangeChecked={e => {
          EDITABLE_TODO_STORE.set({ checked: e });
          action("onChangeChecked");
        }}
        onChangeTitle={e => {
          EDITABLE_TODO_STORE.set({ title: e });
          action("onChangeTitle");
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
