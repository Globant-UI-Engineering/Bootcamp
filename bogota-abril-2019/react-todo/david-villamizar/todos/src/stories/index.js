import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import Todo from "../components/Todo";

const store = new Store({
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
    <State store={store}>
      <Todo
        onChangeChecked={e => {
          store.set({ checked: e });
          action("onChangeChecked");
        }}
        onChangeTitle={e => {
          store.set({ title: e });
          action("onChangeTitle");
        }}
      />
    </State>
  ));

storiesOf("Todos", module);
