import React from 'react'
import Container from './Container'
import {ContainerData} from './ContainerData'
import LastestUpdates from './LastestUpdates';

function News() {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Lastest Updates</h1>
      <div style={{borderStyle : 'outset',borderRadius : '10px'}}>
      <LastestUpdates />
      </div>
      <br />
      <div className="style-box">
        {ContainerData.map((data) => {
          return (
            <Container
              image={data.image}
              alt={data.alt}
              link={data.link}
              author={data.author}
            />
          );
        })}
      </div>
      <div style={{padding: '10px 0px'}}></div>
    </div>
  );
}

export default News
