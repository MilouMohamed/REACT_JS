import { React, useState } from "react";
import TodoList from "./TodoList";
import Todo from "./Todo";

function App_tdl(props) {
  let [todos, setTodos] = useState([]);
  const [toShow, setToShow] = useState([]);
  let [togle2BTN, settogle2BTN] = useState(true);

  const addTodo = (todos_) => {
    setTodos([todos_, ...todos]);
  };

  const handeleff = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
    console.log(id);
  };

  const showTodo = (etat) => {
    setToShow(etat);
    console.log(etat);
  };

  const togelActive = (iiidd) => {
    setTodos(
      todos.map((todoo) => {
        if (todoo.id === iiidd) {
          return { ...todoo, Complete: !todoo.Complete };
        } else {
          return todoo;
        }
      })
    );
  };
  if (toShow === "Active") {
    todos = todos.filter((todo) => !todo.Complete);
  }
  if (toShow === "Complete") {
    todos = todos.filter((todo) => todo.Complete);
  }

  const deleteComplit = () => {
    setTodos(todos.filter((tod) => !tod.Complete));
  };

  const togrl2BTN = () => {
    setTodos(
      todos.map((tod) => ({
        ...tod,
        Complete: togle2BTN,
      }))
    );
    settogle2BTN((togle2BTN = !togle2BTN));
  };

  return (
    <div>
      <TodoList submitt={addTodo} />
      {todos.map((val, key) => (
        <Todo
          key={key}
          todo={val}
          onDelete={() => handeleff(val.id)}
          togelActive={() => togelActive(val.id)}
        />
      ))}
      <button className="btn update-btn" onClick={() => showTodo("All")}>
        All
      </button>
      <button className="btn update-btn" onClick={() => showTodo("Active")}>
        Active
      </button>
      <button className="btn update-btn" onClick={() => showTodo("Complete")}>
        Complete
      </button>
      <br />
      <button className="btn all-btn" onClick={() => togrl2BTN()}>
        togle todo {`${togle2BTN}`}
      </button>
      
      {todos.some((td) => td.Complete) ? (
        <button className="btn all-btn" onClick={() => deleteComplit()}>
          Supprimer tous les Completes
        </button>
      ) : null}
       
    </div>
  );
}

export default App_tdl;
