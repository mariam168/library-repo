
import React, { useState } from 'react';
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';

import topBookIcon from './books images/topBookIcon.png';
import topAuthorIcon from './books images/topAuthorIcon.jfif';
import recentBookIcon from './books images/recentBookIcon.png';
import { Link } from 'react-router-dom';
import data from './data';
import image from './books images/googleIcon.png'
export default function Home() {
  const [searchImage, setSearchImage] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    const results = data.filter(book =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
    setShowDropdown(!!value); 
  };
  const toggleSearch = () => {
    setSearchImage(!searchImage);
  };

  return (
    <div className='home'>
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
          <li onClick={toggleSearch} >Search</li>
          <li>Add Book</li>
          <li><Link to='/OrderBook'>Order Book</Link></li>
        </ul>
        <ul className='logo'>
          <li>
            <img src={logo} alt='logo'></img>
          </li>
        </ul>
      </nav>
    
      <div className='homeBackground'>
      
  {searchImage && (
      <div className='pluring'>
    <div className='navSearch' style={{borderColor:"transparent"}}>
     
      <div className='navSearchContent'>
        <h2>Search for</h2>
        <input type='search' placeholder='Search for Book Or Author....'></input> 
        <div className='navSearchButton'>
          <button>Search</button>
          <button onClick={toggleSearch}>Cancel</button>
        </div>
      </div>
      <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }}></img>
    </div>
    </div>
  )}
  <div style={{marginTop:"-40px"}}>
    <h1>Choose Your Favourite Book</h1>
    <h2>More Than 1000+ Books</h2>
    <div className='search-bar'>
        <input
          type='search'
          className='search'
          value={searchValue}
          onChange={handleSearch}
          placeholder='Search for Book Or Author....'
        />
        {showDropdown && (
          <div className='search-dropdown'>
            {searchResults.slice(0, 6).map(book => (
              <Link to={`/BookProfile/${book.id}`} key={book.id} style={{textDecoration:"none"}}  >
                <div className='search-item'>
                  <span className='search-item-title' >{book.title}</span>
                </div>
              </Link>
            ))}
            {searchResults.length === 0 && (
              <div className='search-item'>
                <span>No results found</span>
              </div>
            )}
          </div>
        )}
      </div>
  </div>
  
</div>

      <nav className='homeContentNav'>
        <ul>
          <li>Romantic</li>
          <li>philosophy and logic </li>
          <li>social sciences</li>
          <li>political science</li>
          <li> the biography </li>
        </ul>
      </nav>

      <div className='homeContent'>
        

          <h2 >Top Books</h2>
        
        <div className='topBooks'>
          {
            data.map((book) => (
              <Link to={`/BookProfile/${book.id}`}>
              <div className='forTitle'>
              <img src={book.image} alt={book.name} className='image'></img>
              <h4 >{book.title}</h4> 
              </div>
              </Link>
            ))
          }
          
        </div>
      
        
         
          <h2>Top Author</h2>
        
        <div className='topAuthors'>
          
          {
            data.map((book) => (
              <Link to={`/authorProfile/${book.id}`} key={book.id}>
              <div className='forTitle'>
              <img src={book.authors[0].authorImage} alt={book.authors[0].name} ></img>
              <h4>{book.authors[0].name}</h4>
              </div>
              </Link>
            ))
          }
         
        </div>
        
      
         
          <h2 >Recent Books</h2>
        
        <div className='recentBooks'>
         
          {data.map((book) => (
             <Link to={`/BookProfile/${book.id}`}>
            <div className='forTitle'>
              <div className='backImg'>
              <img src={book.image} alt={book.name} className='image'></img>
              </div>
              <h4 >{book.title}</h4>
            </div>
            </Link>
          ))}
         
        </div>
        
      </div>
      <div className='websiteInformation'>
        <div className='websiteInformationText'>
          <h1>Literature Website </h1>
          <h2>Carry Arabic and international books and novels in your pocket.</h2>
          <h2>Download books to your phone and read them without the need for the internet.</h2>
          <h2>Browse and read books and novels online</h2>
          <h2>Enjoy the feeling of reading paper books.</h2>
          <h2>Ease of use of the application and navigation between sections with For Read.</h2>
          <h2>The app is provided for free by For Read Library.</h2>
        </div>
      </div>
      
      <footer>
        <h3>© 2022 For Read. All rights reserved.</h3>
      </footer>
    </div>
  );
}