import React, { useState } from "react";

const Developer = (props) => {
  const [id, setId] = useState();

  const setIdHandler = (event) => {
    setId(event.target.value);
  };

  const fetchHandler = () => {
    props.fetchOne(id);
  };

  const deleteHandler = () => {
    props.remove(id);
  };

  return (
    <div class="container">
      <input type="number" value={id} onChange={setIdHandler}></input>
      <button onClick={fetchHandler}>Fetch Developer</button>
      <button onClick={deleteHandler}>Delete Developer</button>
    </div>
  );
};

export default Developer;
