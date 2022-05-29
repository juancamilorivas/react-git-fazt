
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { FaBeer } from 'react-icons/fa';





function App() {
  const [posts, setPosts] = useState([]);

  const getData = async () =>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
   console.log(res.data)
    setPosts(res.data)
  }

  useEffect(() => {
   getData()
  }, []);

  return <div className="App">
  <h1>Hola</h1>
  <h1>Hola</h1>

    {posts.map(post => (
      <div key={post.id} className="card p-2 m-2 bg-dark text-white">
        <div className="card-body">
        <h1>Numero {post.id}</h1>
      <h1> <FaBeer /> {post.title}</h1>
     

        </div>
      </div>

    ))}
<div>

</div>
  </div>;
}

export default App;
