import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import { Switch } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import CreatePost from './containers/CreatePost';
import Posts from './containers/Posts';


function App() {


  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();


  useEffect(() => {

    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }

  }, []);

  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/posts' element={ <Posts /> } />
          <Route path='/createPost' element={<CreatePost />} />
          
        </Routes>
 
    </div>
  );
}

export default App;
