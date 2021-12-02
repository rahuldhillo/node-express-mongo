import React, { useState } from "react";

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const setDescHandler = (event) => {
    setDescription(event.target.value);
  };
  const insertHandler = () => {
    props.insert({ title, description });
  };

  return (
    <div>
      <input type="text" value={title} onChange={setTitleHandler}></input>
      <input type="text" value={description} onChange={setDescHandler}></input>
      <button onClick={insertHandler}> Insert </button>
    </div>
  );
};

export default Form;
