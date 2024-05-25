import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'

function Container({image, alt, link, author}) {
  console.log()
  return (
      <div className='style-box'>
        <div className="box-container">
          <div className="box-image">
            <img src={image} className="box-source-image" alt={alt} />
          </div>
          <div className="box-content">
            <Link to={link}>{alt}</Link>
          </div>
          <div className="box-author">{author}</div>
        </div>
      </div>
  );
}

export default Container