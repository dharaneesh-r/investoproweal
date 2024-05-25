import React from 'react'
import {Data} from './advisorData'
import { Link } from 'react-router-dom';

function Advisors() {
  return (
    <div style={{display : 'flex',gap: '10px 20px',flexWrap : 'wrap', justifyItems : 'center', alignItems : 'center', }}>
      {Data.map((data) => {
        return (
          <div className="advisor-cont">
            <div className="advisor-container">
              <Link to={data.link} className='advisor-content'>{data.title}</Link>
              <hr style={{color: 'white',height : '10px',backgroundColor : 'white'}} />
              <p style={{color: 'white'}}>{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Advisors