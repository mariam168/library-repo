import React, { useState } from 'react';
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';
import data from './data';
import { Link } from 'react-router-dom';
export default function Books() {
    const [searchImage, setSearchImage] = useState(false);

    const toggleSearch = () => {
        setSearchImage(!searchImage);
    };

    return (
        <div>
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
          <li onClick={toggleSearch}>Search</li>
          <li>Reviews</li>
          <li><Link to='/OrderBook'>Order Book</Link></li>
        </ul>
        <ul className='logo'>
          <li>
            <img src={logo} alt='logo'></img>
          </li>
        </ul>
      </nav>
    
            <div className='categoryName'>
            {searchImage && (
          <div className='pluring'>
               <div className='navSearch' style={{borderColor:'transparent'}}>
     
      <div className='navSearchContent'>
        <h2>Search for</h2>
        <input type='search' placeholder='Search for Book Or Author....'></input> 
        <div className='navSearchButton'>
          <button>Search</button>
          <button>Cancel</button>
        </div>
      </div>
      <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }}></img>
    </div>
    </div>
  )}
                <h1>Books</h1>
            </div>
            <div className='categories'>
            {data.map((book) => (
              <Link to={`/BookProfile/${book.id}`}>
            <div key={book.id} className='category'>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
            </div>
            </Link>
             ))}
             
            </div>
            
            <footer>
        <h3>© 2022 For Read. All rights reserved.</h3>
         </footer>
        </div>
    );
}
