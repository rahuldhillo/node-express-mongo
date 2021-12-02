import React, { useState, useEffect } from "react";
// import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setPosts(JSON.stringify(data)));
  };

  // useEffect(() => {
  //   fetchPost();
  // }, []);

  return (
    <div>
      <p> {posts} </p>
      <button onClick={fetchPost}> Fetch Data </button>
    </div>
  );
};

export default App;
