import React, { useState } from 'react'
import './QuotePage.css'


const QuotePage = ({bookmarks,setBookmarks}) => {

  const [quote,setQuote]=useState('The human spirit must prevail over technology');
  const [author,setAuthor]=useState('-Albert Einstein');


  // function getQuote(){
  //   fetch("http.//quotable.io/random")
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setQuote(data.content);
  //   })
  // }

  const getQuote= async ()=>{
    const response = await fetch("http://quotable.io/random");
    const data = await response.json();
    console.log(data);
    setQuote(data.content);
    setAuthor(data.author);
  };

  const addToBookmark=(quote,author)=>{
    console.log(quote,author);
    setBookmarks([
      ...bookmarks,{quote:quote,author:author}
    ])
  }


  return (
    <div className='quote-page'>
      <div className="quote-box">
        <div className="quote-text" id='quote'>" {quote} "</div>
        <div className="quote-author">-{author}</div>
        <div className="bookmark-btn">
            <i class="fa fa-bookmark"  onClick={()=>{addToBookmark(quote,author)}}></i>
        </div>
      </div>

      <div className="next-quote">
        <button id='next-btn' className='next-btn'  onClick={()=>{getQuote()}}>Next Quote</button>
      </div>
    </div>
  )
}

export default QuotePage