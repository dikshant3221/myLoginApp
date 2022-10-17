import './App.css';
import Home from './Home';
import SignUp from './SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from 'axios';

const baseURL = "https://reqres.in/api/login";

function App() {

  const [post,setPost]= useState(null);

  useEffect(()=>{
    axios.get(baseURL).then((response)=>{
       setPost(response.data.data);
    });
  },[])

  function createPost(){
    axios.post(`${baseURL}/1`,{
      email: "dikshantsahani12@gmail.com",
      password: "password"
    }).then((response)=>{
      setPost(response.data);
    })

  }

  function updatePost() {
    axios.put(`${baseURL}/1`, {
        email: "dsahani12@gmail.com",
        password: "password1111"
      })
      .then((response) => {
        setPost(response.data);
      });
  }


  function deletePost() {
    axios.delete(`${baseURL}/1`)
      .then(() => {
        alert("Post deleted!");
        setPost("empty");
      });
  }


  if (!post) return null;

  return (

    <div className="App">
    <h1>{post.email}</h1>
    <h1>{post.password}</h1>
    <button onClick={()=>createPost()}>post Details</button>
    <button onClick={()=>updatePost()}>put Details</button>
    <button onClick={()=>deletePost()}>delete Details</button>
           <Router>
      <Routes>
          <Route path="/" element={< Home/>}/>
          <Route  path ="/SignUp" element={<SignUp/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
