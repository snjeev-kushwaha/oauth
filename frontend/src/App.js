import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import Login from './components/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom'
import Post from './pages/Post';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user, 'outside of user')

  return (
    <div className="App">
      <Header user={user} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/post/:id' element={user ? <Post /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
