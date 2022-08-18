import React from 'react'
import './Quote.css'

const Quote = () => {

  


  return (
    <div className='quote'>
        <div className="quote-text" id='quote'>Random Quote</div>
        <div className="quote-author">-Albert </div>
        <div className="bookmark-btn">
            <i class="fa fa-bookmark"></i>
        </div>
    </div>
  )
}

export default Quote