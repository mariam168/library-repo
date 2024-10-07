import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './data';
import logo from './books images/logo.png';
import rollPaper from './books images/rollPaper.png';
import coin from './books images/coin.png';
import profile1 from './books images/profile1.jpg';
import profile2 from './books images/profile2.jpg';
import bookPreview from './books images/bookPreview.png';

import bookShareIcon from './books images/bookShareIcon.png';
import bookReviewIcon from './books images/bookReviewIcon.png';
import bookNotes from './books images/bookNotesIcon.png';
import starRate from './books images/starRate.png'
export default function BookProfile() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [searchImage, setSearchImage] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const foundBook = data.find(item => item.id === parseInt(id));
    if (foundBook) {
      setBook(foundBook);
    }
  }, [id]);

  if (!book) {
    return <div>Not Available</div>;
  }

  const toggleSearch = () => {
    setSearchImage(!searchImage);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % book.authors[0].authorWorks.length);
  };

  const previous = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? book.authors[0].authorWorks.length - 1 : prevIndex - 1
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
      <div className='bookProfile'>
       
        <div className='bookProfileContent'>
          <div className='bookLeftSection'>
            <img src={book.image} alt='profile' />
            <div className='preview'><img src={bookPreview} alt='bookPreview'></img><p>Preview</p></div>
            <div className='download'><p>Download Book</p></div>
             <br></br>
              <div className='share'>
                <div>
                  <img src={bookNotes} alt="bookNotes"></img>
                  <p>Notes</p>
                </div>
                <div>
                  <img src={bookShareIcon} alt="bookShareIcon" style={{width:"20px",marginTop:"5px"}}></img>
                  <p>Share</p>
                </div>
                <div>
                  <img src={bookReviewIcon} alt="bookNotes"></img>
                  <p>Notes</p>
                </div>
                

              </div>
          </div>
          <div className='bookRightSection'>
             <h1>{book.title}</h1>    
            <h3>By : {book.authors[0].name}</h3>
            <div className='bookOverview'>
              <div className='starRate'>
                <img src={starRate} alt="starRate" ></img>
                <p>{book.starRate}</p>
                
              </div>
                <p>{book.wantRead}  Want read</p>
                <p>{book.currentRead}  Current reading</p>
                <p>{book.haveRead}  Have read</p>
            </div>
           
            <h4>
          
          What is the plot of Pride and Prejudice? Pride and Prejudice
          follows the turbulent relationship between Elizabeth Bennet,
          What is the plot of Pride and Prejudice? Pride and Prejudice
          follows the turbulent relationship between Elizabeth Bennet,
          What is the plot of Pride and Prejudice? Pride and Prejudice
          follows the turbulent relationship between Elizabeth Bennet,
          the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner 
        </h4>
        <div className='bookGeneralInformation'>
          <div>
           <h3>Publish Date</h3>
           <p >{book.publishDate}</p>
          </div>
          <div>
           <h3>Publisher</h3>
           <p>{book.publisher}</p>
          </div>
          <div>
           <h3>Language</h3>
           <p>{book.language}</p>
          </div>
          <div>
           <h3>Pages</h3>
           <p>{book.pages}</p>
          </div>

        </div>
        
          </div>
          
        </div>
        
        <div className='bookSection'>
          <h2>Related Books</h2>
          <div className='bookSectionContent'>
          <img src={coin} alt='coin' className='coin' onClick={previous} />
{[0, 1, 2, 3].map((idx) => {
    const work = book.authors[0].authorWorks[(index + idx) % book.authors[0].authorWorks.length];
    return (
        <div key={idx}>
            <img src={work.image} alt={work.title} />
            <h3>{work.title}</h3>
        </div>
    );
})}
<img src={coin} alt='coin' className='coin' onClick={next} />

          </div>
        </div>
        <div className='bookDetails'>
          <h2>Book Details</h2>
         <hr style={{width:"100%",marginTop:"-5px"}}></hr>

        <div className='bookDetailsContent'>
          <div>
          <h3>Edition Notes</h3>
          <p>Published In : {book.publishPlace}</p>
          <p>Series : {book.series}</p>
          
          </div>
          <div>
            <h3>The Physical Object</h3>
            <p>Format : {book.format}</p>
            <p>Pagination : {book.pagination}</p>
            <p>Pages : {book.pages}</p>
            <p>Dimensions : {book.dimensions}</p>
          </div>
          <div>
            <h3>ID Numbers</h3>
            <p>Open Library : {book.openLibrary}</p>
            <p>Internet Archive : {book.internetArchive}</p>
            <p>ISBN 10: {book.ISBN10}</p>
            <p>ISBN 13: {book.ISBN13}</p>
            
          </div>

        </div>
        </div>
       
        <footer>
          <h3>© 2022 For Read. All rights reserved.</h3>
        </footer>
      </div>
    </>
  );
}
