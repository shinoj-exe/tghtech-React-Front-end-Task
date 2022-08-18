import React from 'react'
import Bookmarks from './components/Bookmarks'; 
import Home from './components/Home';

import './App.css'


const App = () => {
  return (
    <div className='App'>
        <div className="Home homePage-sections">
            <Home></Home>
        </div>
        <div className="Bookmarks homePage-sections">
            <Bookmarks></Bookmarks>
        </div>
    </div>
  )
}

export default App