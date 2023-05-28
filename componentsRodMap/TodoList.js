import { Component } from "react";
import "./TodoListCSS.css";
import { React, useState } from "react";
import shortid from "shortid";

export const TodoList = (props) => {
  const [text_, setText_] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    props.submitt({
      id :shortid.generate(),
      todo:text_,
      complit:false,

    })
    setText_("");
  };

  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          className="input-field"
          onChange={(e) => {
            setText_(e.target.value); 
          }}
          value={text_}
        />

        <button className="btn" onClick={handelSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoList;
