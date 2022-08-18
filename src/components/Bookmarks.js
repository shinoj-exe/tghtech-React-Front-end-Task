import React ,{useState}from 'react'
import './Bookmark.css'

const Bookmarks = ({bookmarks,setBookmarks}) => {
  return (
    <div>
      <h1>Bookmarks</h1>
      {
        bookmarks.map(bookmark=>(
          <div className="quote-bookmark">
            
            <div className="quote--bookmark" id='quoteBookmark'>{bookmark.quote}</div>
            <div className="quote-author-bookmark">-{bookmark.author}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Bookmarks