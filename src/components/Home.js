import React from 'react';
import QuotePage from './QuotePage';
import './Home.css';


const Home = () => {
  return (
    <div className='homePage'>
      <h1>Home</h1>
      <QuotePage></QuotePage>
    </div>
  )
}

export default Home