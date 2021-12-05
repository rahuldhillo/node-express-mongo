import React, { useState, useEffect } from "react";
import Form from "./components/forms/Form";
import Developer from "./components/developers/Developer";
import EditUser from "./components/edit/EditUser";
import Add from "./components/add/Add";
import Remove from "./components/remove/Remove";

const App = () => {
  const [data, setData] = useState([1, 2, 3, 4]);
  const [singleData, setSingleData] = useState([]);
  const [userChange, setUserChanged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/tutorials/")
      .then((response) => response.json())
      .then((data) => setData(data));
    setUserChanged(false);
  }, [userChange]);

  const remove = (id) => {
    fetch(`http://localhost:8080/api/tutorials/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div class="container">
      <h1>
        User Dashboard <Add edited={setUserChanged} />
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>
                  <EditUser user={user} edited={setUserChanged} />
                </td>
                <td>
                  <Remove user={user} edited={setUserChanged} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
