import React from "react";
import Marquee from "react-fast-marquee";

let Market = [
  { content: "NIFTY 50" },
  { content: "SENSEX" },
  { content: "FINNIFTY" },
  { content: "S&P 500" },
  { content: "DOW JONES" },
  { content: "NASDAQ" },
  { content: "NIKKIE" },
  { content: "HANG SENG" },
  { content: "FTC" },
  { content: "DAX" },
  { content: "NYSE" },
  { content: "DXY" },
  { content: "NIFTY IT" },
  {content : 'RUSSEL'},
  {content : 'TSX COMPOSITE INDEX'}
];

function MarketData() {
  return (
    <div>
      <Marquee pauseOnHover>
        {Market.map((data) => {
          return <div className="market-data">{data.content}</div>;
        })}
      </Marquee>
    </div>
  );
}
export default MarketData;
