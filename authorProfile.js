import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data';
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';
import coin from './books images/coin.png';

export default function AuthorProfile() {
  const { id } = useParams();
  const [Author, setAuthor] = useState(null);
  const [searchImage, setSearchImage] = useState(false);
  const [index, setIndex] = useState(0);
    
  useEffect(() => {
    const foundAuthor = data.find(item => item.id === parseInt(id));
    if (foundAuthor) {
      setAuthor(foundAuthor);
    }
  }, [id]);

  if (!Author) {
    return <div>Not Available</div>;
  };

  const toggleSearch = () => {
    setSearchImage(!searchImage);
  };
  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % Author.authors[0].authorWorks.length);
  };

  const previous = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Author.authors[0].authorWorks.length - 1 : prevIndex - 1
    );
  };

 
  return (
    <>
      <nav className='nav'>
        <ul className='signButton'>
          <Link to ='/SignUp'>
            <li>
              <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }} />
              <h3>Sign Up</h3> 
            </li>
          </Link>
          <Link to='/SignIn'>
            <li>
              <img src={rollPaper} alt='rollPaper' className='rollPaper' style={{ transform: 'rotate(90deg)' }} />
              <h3>Sign In</h3>
            </li>
          </Link>
        </ul>
        <ul className='middleNav'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Books'>Books</Link></li>
          <li><Link to='/Author'>Authors</Link></li>
          <li onClick={toggleSearch}>Search</li>
          <li>Add Book</li>
          <li><Link to='/OrderBook'>Order Book</Link></li>
        </ul>
        <ul className='logo'>
          <li>
            <img src={logo} alt='logo' />
          </li>
        </ul>
      </nav>
      <div className='authorProfile'>
        <div className='authorProfileContent'>
          <div className='leftSection'>
            <img src={Author.authors[0].authorImage} alt='profile' />
            
          
          </div>
          <div className='rightSection'>
            <h2>About {Author.authors[0].name}</h2>
            <p>{Author.authors[0].authorInformation}</p>
            <div className='total'>
              <div><h3>{Author.authors[0].booksNumber}<br></br>Book</h3></div>
              <div><h3>{Author.authors[0].quotesNumber}<br />Quote</h3></div>
              <div><h3>{Author.authors[0].storiesNumber}<br />Story</h3></div>
              <div><h3>{Author.authors[0].novelsNumber}<br />Novel</h3></div>
            </div>
          </div>
        </div>
        <h2 style={{marginTop:"150px",textAlign:"center",color:"white",marginBottom:"-80px"}}>Others {Author.authors[0].name}'s Works</h2>
        <div className='authorSection'>

          <img src={coin} alt='coin' className='coin' onClick={previous} />
          {[0, 1, 2, 3].map((idx) => {
    const work = Author.authors[0].authorWorks[(index + idx) % Author.authors[0].authorWorks.length];
    return (
        <div key={idx}>
            <img src={work.image} alt={work.title} />
            <h3 >{work.title}</h3>
        </div>
    );
})}
          <img src={coin} alt='coin' className='coin' onClick={next} />
        </div>
        <footer>
          <h3>© 2022 For Read. All rights reserved.</h3>
        </footer>
      </div>
    </>
  );
}
