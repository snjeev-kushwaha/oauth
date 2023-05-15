import React from 'react'
import Header from './components/Header'
import Home from './pages/Home';
import Login from './components/login/Login';
import { Routes, Route, Navigate } from 'react-router-dom'
import Post from './pages/Post';

function App() {
  const user = true
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
