import React, { useState,useEffect } from 'react'
import './QuotePage.css'


const QuotePage = ({bookmarks,setBookmarks}) => {

  const [tags,setTags]=useState([]);
  const [tag,setTag]=useState('');

  useEffect(()=>{
    const getTags = async()=>{
    const res = await fetch("https://quotable.io/tags");
    const tagData=await res.json();
    console.log(tagData);
    setTags(tagData);

    }
    getTags();
  },[]);

  const handleTag=(event)=>{
    const tagSelected=event.target.value;
    console.log(tagSelected);
    setTag(tagSelected)
  }

  const [quote,setQuote]=useState('The human spirit must prevail over technology');
  const [author,setAuthor]=useState('-Albert Einstein');





  const getQuote= async ()=>{
    // const response = await fetch("http://quotable.io/random");
    const response = await fetch(`https://quotable.io/random?tags=${tag}`);
    
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

      <div className="quote-tags">
        <select name="tags" id="tags" onChange={(e)=>handleTag(e)}>
          <option >--Tags--</option>
          {
            tags.map((tag)=>(
              <option key={tag._id} value={tag.name}>{tag.name}</option>
            ))
          }
        </select>
      </div>

      <div className="next-quote">
        <button id='next-btn' className='next-btn'  onClick={()=>{getQuote()}}>Next Quote</button>
      </div>
    </div>
  )
}

export default QuotePage
