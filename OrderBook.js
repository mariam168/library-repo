import React from "react";
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';

import { Link } from "react-router-dom";
export default function OrderBook() {
    
    return(
        <div className="orderBook">
          <nav className='nav'>
        <ul className='signButton'>
          <Link to ='/SignUp'>
          <li>
            <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }}></img>
           <h3>Sign Up</h3> 
          </li>
          </Link>
          <Link to='/SignIn'>
          <li>
            <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }}></img>
            <h3>Sign In</h3>
          </li>
          </Link>
        </ul>
        <ul className='middleNav'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Books'>Books</Link></li>
          <li><Link to='/Author'>Authors</Link></li>
         
          <li>Reviews</li>
          <li><Link to='/OrderBook'>Order Book</Link></li>
        </ul>
        <ul className='logo'>
          <li>
            <img src={logo} alt='logo'></img>
          </li>
        </ul>
      </nav> 
    <div className="orderBookContent">
    
          <form >
            <div>
            <input type="text" placeholder="Name..."></input>
            <input type="email" placeholder="Email..."></input>
            <input type="text" placeholder="Book Name...."></input>
            <input type="text" placeholder="Author Name"></input>
            </div>
            <div style={{position:'relative',left:"-30px",top:"10px"}}>
            <textarea placeholder="Additional Notes" className="additionalNotes"></textarea>
            <button type="submit">Submit</button>
            </div>
            
          </form>
    </div>

        </div>
    )
}