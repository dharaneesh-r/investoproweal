import React from 'react'
import Container from './Container'
import Mutual_investor from './Mutual_investor'
import Data from './mutual pack'


function Mutual({image, alt, link, author}) {

return (
  <div>
    <div style={{color : 'grey',fontSize : '25px',padding : "10px 2px"}}>Investing differs from trading in that investing is for the long-term, usually years or decades. Investing is one of the key strategies to building long-term wealth and financial security.</div>
    <div className='style-interest'>
      <Mutual_investor />
    </div>
    <div className="style-box">
      {Data.map((data) => {
        return (
          <div>
            <Container
              image = {data.image}
              alt={data.alt}
              link={data.link}
              author={data.author}
            />
          </div>
        );
      })}
    </div>
    <div>
      <div style={{padding: "10px 0px"}}></div>
    </div>
    <br />
  </div>
);

}

export default Mutual