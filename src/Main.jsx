import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./welcome.css";
import App from "./App";
import Finance from "./Finance";
import Container from "./Container";
import Marquees from "./Marquees";
import MarketData from "./MarketData";
import Advisors from "./Advisors";
import { DataArticles } from "./DataArticles";
import gsap, { Bounce } from "gsap";
import { Elastic } from "gsap";

let data = [
  {
    id: "1",
    image:
      "https://www.investopedia.com/thmb/wfvcTbYvLhNDaaT4bvnIPQDMW3A=/600x320/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-2147859742-614bb44976aa4a6da225af136c9e9dfa.jpg",
    alt: "Powells Confirms Higher-For-Longer Interest Rates",
    link: "https://www.investopedia.com/us-economy-news-today-housing-starts-and-permits-nosedived-in-march-8634124",
    author: "By Taylor Tompkins",
  },
  {
    id: "2",
    image:
      "https://www.investopedia.com/thmb/UBbqPYSC0CeF5R6wKF1CoXQLZ9I=/600x320/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-486382066-ef29bd1d7aed458eb5c1112810ffe210.jpg",
    alt: "UnitedHealth Stock Jumps on Earnings Beat",
    link: "https://www.investopedia.com/unitedhealth-stock-jumps-on-earnings-beat-in-first-quarterly-report-since-cyberattack-8634072",
    author: "By Aaron MacDade",
  },
  {
    id: "3",
    image:
      "https://www.investopedia.com/thmb/W6AhSrWYFXnS4r6uEuWK4DAJfnY=/610x407/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UALChart-c698b88865794465892be7b026df892e.GIF",
    alt: "Unied Airlines Stock Climbing after Topping Q1 Estimates",
    link: "https://www.investopedia.com/united-airlines-stock-climbs-after-topping-q1-estimates-issuing-upbeat-guidance-8634632",
    author: "By Earning Reports",
  },
  {
    id: "4",
    image:
      "https://www.investopedia.com/thmb/FykC7BX6732aDr3lo1GdPsYH0LI=/610x407/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/latestGainersLosers-0b9b83661143438a977cdfd4046437b8.png",
    alt: "S&P 500 Gains and Losses",
    link: "https://www.investopedia.com/s-and-p-500-gains-and-losses-today-live-nation-stock-falls-as-antitrust-lawsuit-looms-8634512",
    author: "By Market News",
  },
];

gsap.fromTo('.style-box', {x : 1000, y : 1000, scale : 5, opacity : 0}, {x : 0, y : 0,opacity : 1, duration : 20,yoyo : true, scale : 1, opacity : 1, repeat : -1,  ease : 'elastic'})

function Main() {
  let content = "Investoproweal for Advisors";
  return (
    <div>
      <div className="style-box">
        {data.map((data) => {
          return (
            <div>
              <Container
                image={data.image}
                alt={data.alt}
                link={data.link}
                author={data.author}
              />
            </div>
          );
        })}
      </div>
      <div className="marketdata">
        <MarketData />
      </div>
      <br />
      <div className="advisors">
        <h1 style={{ textAlign: "center" }}>{content}</h1>
        <p
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            paddingBottom: "10px",
          }}
        >
          The resources you need to become the best financial advisor you can
          be.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", padding: "5px" }}>
          <Advisors />
        </div>
      </div>
      <div style={{ padding: "10px 0px" }}></div>

      <div>
        <div style={{ fontSize: "25px", textAlign: "center", padding: "10px" }}>
          Last Articles
        </div>
        <div className="style-box">
          {DataArticles.map((data) => {
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
      </div>
    </div>
  );
}

export default Main;
