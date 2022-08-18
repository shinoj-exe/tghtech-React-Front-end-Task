import React from 'react';
import Quote from './Quote';
import './Home.css';


const Home = () => {
  return (
    <div className='homePage'>
      <h1>Home</h1>
      <Quote></Quote>
      <button id='next-btn' className='next-btn'>Next Quote</button>
    </div>
  )
}

export default Home