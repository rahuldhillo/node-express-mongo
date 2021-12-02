import React, { useState, useEffect } from "react";
import Form from "./components/forms/Form";
import Developer from "./components/developers/Developer";

const App = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);

  const fetchAll = () => {
    fetch("http://localhost:8080/api/tutorials/")
      .then((response) => response.json())
      .then((data) => setData(JSON.stringify(data)));
  };

  const fetchOne = (id) => {
    fetch(`http://localhost:8080/api/tutorials/name?id=${id}`)
      .then((response) => response.json())
      .then((data) => setSingleData(JSON.stringify(data)));
  };

  const insert = (data) => {
    fetch("http://localhost:8080/api/tutorials/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const remove = (id) => {
    fetch(`http://localhost:8080/api/tutorials/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <p> {data} </p>
      <button onClick={fetchAll}> Fetch Data </button>
      <Form insert={insert}></Form>
      <Developer fetchOne={fetchOne} remove={remove}></Developer>
      <p>{singleData}</p>
    </div>
  );
};

export default App;
