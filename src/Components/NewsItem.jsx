import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './NewsItem.css';
const NewsItem = (props) => {
  const location = useLocation();
  console.log(props, ' props');
  console.log(location, ' useLocation Hook');
  return (
    <>
      <Helmet>
        <title>{location.state.title}</title>
        <meta name='description' content={location.state.description} />
        <link rel='canonical' href='/latest-news' />
      </Helmet>
      <div className='newsItemContainer'>
        <Link to='/' className='link'>
          <p>Back</p>
        </Link>
        <h1>{location.state.title}</h1>
        <img src={location.state.image} alt={location.state.title} />
        <p>{location.state.description}</p>
      </div>
    </>
  );
};

export default NewsItem;
