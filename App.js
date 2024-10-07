import React from 'react';
import './index.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import './form.css';
import Home from './Home';
import './Home.css';
import OrderBook from './OrderBook';
import './OrderBook.css';
import Books from './Books';
import './categories.css';
import Author from './Author';

import AuthorProfile from './authorProfile';
import './authorProfile.css';
import BookProfile from './bookProfile';
import './BookProfile.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />}></Route>
        <Route path='/OrderBook' element={<OrderBook />}></Route>
        <Route path='/Books' element={<Books/>}></Route>
        <Route path='/Author' element={<Author/>}></Route>
        <Route path='/AuthorProfile/:id' element={<AuthorProfile/>}></Route>
        <Route path='/BookProfile/:id' element={<BookProfile/>}></Route>  
      </Routes>
    </Router>
  );
}

export default App;

