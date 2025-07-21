import React from 'react'
import './App.css';
import LibraryManagementSystem from './component/LibraryManagementSystem'
import Navbar from './component/Navbar';
import AdminLogin from './component/AdminLogin';
import AdminRegistration from './component/AdminRegistration';
import UserLogin from './component/UserLogin';
import UserRegistration from './component/UserRegistration';

const App = () => {
  return (
    <div>
        <LibraryManagementSystem></LibraryManagementSystem>
       <Navbar></Navbar>  
       </div>
  )
}

export default App