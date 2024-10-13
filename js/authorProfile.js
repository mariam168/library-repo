import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import coin from '../books-images/coin.png';
import Header from './Header';
import SearchBar from './SearchBar';

export default function AuthorProfile() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [searchImage, setSearchImage] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/data/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch author data');
        }
        const data = await response.json();
        setAuthor(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAuthorData();
  }, [id]);

  if (!author) {
    return <div>Not Available</div>;
  }

  const toggleSearch = () => {
    setSearchImage(!searchImage);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % author.authors[0].authorWorks.length);
  };

  const previous = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? author.authors[0].authorWorks.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header toggleSearch={toggleSearch} />
      <div className='authorProfile'>
        {searchImage && <SearchBar toggleSearch={toggleSearch} />}

        <div className='authorProfileContent'>
          <div className='leftSection'>
            <img src={author.authors[0].authorImage} alt='profile' />
          </div>
          <div className='rightSection'>
            <h2>About {author.authors[0].name}</h2>
            <p>{author.authors[0].authorInformation}</p>
            <div className='total'>
              <div><h3>{author.authors[0].booksNumber}<br />Book</h3></div>
              <div><h3>{author.authors[0].quotesNumber}<br />Quote</h3></div>
              <div><h3>{author.authors[0].storiesNumber}<br />Story</h3></div>
              <div><h3>{author.authors[0].novelsNumber}<br />Novel</h3></div>
            </div>
          </div>
        </div>
        <div className='authorSection'>
        <h2 >
          Others {author.authors[0].name}'s Works
        </h2>
        <div className='authorSectionContent'>
          <img src={coin} alt='coin' className='coin' onClick={previous} />
          {[0, 1, 2, 3].map((idx) => {
            const work = author.authors[0].authorWorks[(index + idx) % author.authors[0].authorWorks.length];
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
        <footer>
          <h3>© 2022 For Read. All rights reserved.</h3>
        </footer>
      </div>
    </>
  );
}
