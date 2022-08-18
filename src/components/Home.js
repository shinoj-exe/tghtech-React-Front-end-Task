import React from 'react';
import QuotePage from './QuotePage';
import './Home.css';


const Home = ({bookmarks,setBookmarks}) => {
  return (
    <div className='homePage'>
      <h1>Home</h1>
      <QuotePage bookmarks={bookmarks} setBookmarks={setBookmarks}></QuotePage>
    </div>
  )
}

export default Home