import React,{useState} from 'react'
import Bookmarks from './components/Bookmarks'; 
import Home from './components/Home';

import './App.css'

const App = () => {
  const [bookmarks,setBookmarks]=useState([]);

  console.log(bookmarks);

  return (
    <div className='App'>
        <div className="Home homePage-sections">
            <Home bookmarks={bookmarks} setBookmarks={setBookmarks}></Home>
        </div>
        <div className="Bookmarks homePage-sections">
            <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks}></Bookmarks>
        </div>
    </div>
  )
}

export default App