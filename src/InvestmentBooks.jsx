import React from 'react'
import { data } from './InvestmentData'
import {Link} from "react-router-dom"


function InvestmentBooks() {
  return (
      <div className="containers">  
        {data.map((data) => {
          return (
            <div className="investment_container">
              <div>
                <img
                  src={data.image}
                  alt={data.alt}
                  className="investment_img"
                />
              </div>
              <Link to={data.url} className="investment_content">
                {data.alt}
              </Link>
              <p
                style={{ color: "grey", fontSize: "15px", padding: "5px 5px" }}
              >
                ₹{data.price}{" "}
                <span style={{ fontSize: "11px" }}>({data.off}% off)</span>{" "}
                <span style={{ float: "right" }}>⭐{data.review}</span>
              </p>
            </div>
          );
        })}
      </div>
  );
}

export default InvestmentBooks