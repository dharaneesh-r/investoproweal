import React from 'react'
import {Link} from "react-router-dom"
import Container from './Container'
import { render } from '@testing-library/react'
import InvestmentBooks from './InvestmentBooks'

let data = [
  {
    id: "1",
    image:
      "https://www.investopedia.com/thmb/dgnxJC8nOiGqg6HaGYIcdBLNmIE=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Investingjourneypic-a9bb92f557694caaaa92b761eb2cadd9.jpg",
    alt: "Introduction to Investing",
    link: "https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp",
    author: "By James Chen",
  },
  {
    id: "2",
    image:
      "https://www.investopedia.com/thmb/7OvVZoUgbCjGbzryy5RWLGeZxVk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fundamental-analysis-lrg-3-5bfc2b2146e0fb0051bdcd0d.jpg",
    alt: "What are Stock Fundamental",
    link: "https://www.investopedia.com/articles/fundamental/03/022603.asp",
    author: "By Ben McClure",
  },
  {
    id: "3",
    image:
      "https://www.investopedia.com/thmb/PV3QtOfrFS1iP3EOsMKg4wVdOkw=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4243163-v1-05dfe20436f042999666243640fd84cd.png",
    alt: "How to Invest in Stoks: A Beginner's Guide",
    link: "https://www.investopedia.com/articles/basics/06/invest1000.asp",
    author: "By Peter Gratton",
  },
  {
    id: "4",
    image:
      "https://www.investopedia.com/thmb/fQu8gGQM8dnWspP28l-62NPuKps=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1794651796-b589aa742af949618d90fdaeaa3924da.jpg",
    alt: "How Do I Keep Commission and Fees From Trading Profits",
    link: "https://www.investopedia.com/ask/answers/08/trading-frequency-commissions.asp",
    author: "By Chris Gallant",
  },
  {
    id: "5",
    image:
      "https://www.investopedia.com/thmb/SCpcDA7qSrRwv8WslLrpwOQJ4zQ=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Primary-Image-american-express-cd-rates-april-2023-7482932-2970b0b4e1cc495da6f5c29659589d96.jpg",
    alt: "4 Basic Things To Know About Bonds",
    link: "https://www.investopedia.com/articles/bonds/08/bond-market-basics.asp",
    author: "By Eric Fontinelle",
  },
  {
    id: "6",
    image:
      "https://www.investopedia.com/thmb/PvrEn7pAU6yIkwnjWwqYG1kbeAE=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Investing-in-Real-Estate-for-Income-56a092c05f9b58eba4b1ab8a.jpg",
    alt: "Open a Real Estate Crowdfunding Account",
    link: "https://www.investopedia.com/how-to-open-a-real-estate-crowdfunding-account-8422492",
    author: "By Michael Sacchitello",
  },
  {
    id: "7",
    image:
      "https://www.investopedia.com/thmb/izen4Ns75FRENkk64mUa_4IppBs=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-2003731467-bc8bb5b5dc7743209c6d6611dd177bab.jpg",
    alt: "Best Tech Stocks for April 2024",
    link: "https://www.investopedia.com/best-tech-stocks-8549526",
    author: "By Nathan Reiff",
  },
  {
    id: "8",
    image:
      "https://www.investopedia.com/thmb/vbz795hqfe1Wpuwm8leY0MX1O-0=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Primary-Image-best-portfolio-management-software-tools-2023-7552649-7ec6ff2eca0c4db6bcc9f3317e2c9b1e.jpg",
    alt: "Best Portfolio Management Software Tools",
    link: "https://www.investopedia.com/best-portfolio-management-software-tools-7552649",
    author: "By Gina Young",
  },
  {
    id: "9",
    image:
      "https://www.investopedia.com/thmb/8Oev5fKayUyuHyhN2G_2cSVabrU=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Primary-Image-how-to-buy-fractional-shares-on-webull-7499351-42d9405110714d1cb5de848ffe68fd5d.jpg",
    alt: "How to Buy Fractional Shares on Webull",
    link: "https://www.investopedia.com/how-to-buy-fractional-shares-on-webull-7499351",
    author: "By Gina Young",
  },
  {
    id: "10",
    image:
      "https://www.investopedia.com/thmb/vuXCIJDVgE5lrmr8tZqxHLUD7YI=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Primary-Image-how-to-buy-dividend-stocks-7503745-3a40ff09887548ac9dd2c6406b200a82.jpg",
    alt: "How to Buy Dividend Stocks",
    link: "https://www.investopedia.com/how-to-buy-dividend-stocks-7503745",
    author: "By Andrew Grossman",
  },
  {
    id: "11",
    image:
      "https://www.investopedia.com/thmb/74Lz00y_2sug6NGTfoYMtbAeuv0=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1311598658-0ce4117307864381b72bd851fc0db407.jpg",
    alt: "How to Open a Robo Advisor Accounts",
    link: "https://www.investopedia.com/how-to-open-a-robo-advisor-account-7973767",
    author: "By Barbara A. FriedBerg",
  },
  {
    id: "12",
    image:
      "https://www.investopedia.com/thmb/qxZhy4gW-QyqTgTsAwh9iF_RBwA=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Primary-Image-how-to-invest-in-gold-and-silver-7369625-32ca92a5fd0542b39761f0b1241438ff.jpg",
    alt: "How to Invest Gold and Silver",
    link: "https://www.investopedia.com/how-to-invest-in-gold-and-silver-7369625",
    author: "By Michael Sacchitello",
  },
  {
    id: "13",
    image:
      "https://www.investopedia.com/thmb/tzhcBfH56QjznMWt1yolU9iX_1w=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1370827731-8629ef54007a4e219cd6a3b133ab6c9b.jpg",
    alt: "How to Automate Your Investing",
    link: "https://www.investopedia.com/how-to-automate-your-investing-7378239",
    author: "By Barbara A. FriedBerg",
  },
  {
    id: "14",
    image:
      "https://www.investopedia.com/thmb/dv2MBJR2xvpbCiNb14WIPcbjTdc=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1130326185-b6776bba612440f78924e233f97daeb8.jpg",
    alt: "How to Invest in Uncertain Times",
    link: "https://www.investopedia.com/investing/investment-uncertainty/",
    author: "By Brain Beers",
  },
  {
    id: "15",
    image:
      "https://www.investopedia.com/thmb/WwlrdX_0lrc52E9W-M2QeX8soAk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Primary-Image-how-to-buy-uniswap-uni-7229716-26f18912499045cfa710a14f8c16c39c.jpg",
    alt: "How to Buy Uniswap (UNI)",
    link: "https://www.investopedia.com/how-to-buy-uniswap-uni-7229716",
    author: "By Monaj Sharma",
  },
  {
    id: "16",
    image:
      "https://www.investopedia.com/thmb/QwQSdMYXINjXy7QdWFcI7Wz9jTk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/article_12_image-5bfc2ff646e0fb0083c1475a.jpg",
    alt: "Saving vs Investing ",
    link: "https://www.investopedia.com/articles/investing/022516/saving-vs-investing-understanding-key-differences.asp",
    author: "By Adams Hayes",
  },
  {
    id: "17",
    image:
      "https://www.investopedia.com/thmb/wDt1OTcA6k1rWuFKhRudT1Gsa9E=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/apple2-6c91ab983f114bd8aec7dc223aa589f2.jpg",
    alt: "Apple 5 Most Profitable Lines Of Business",
    link: "https://www.investopedia.com/apple-s-5-most-profitable-lines-of-business-4684130",
    author: "By Shoshanna Delventhal",
  },
  {
    id: "18",
    image:
      "https://www.investopedia.com/thmb/69ca5eLWRxuleClXrwPje3clhvM=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_349461494-5bfc474bc9e77c00514a4202.jpg",
    alt: "Understanding Small and Big Cap Stocks",
    link: "https://www.investopedia.com/insights/understanding-small-and-big-cap-stocks/",
    author: "By Rick Wayman",
  },
  {
    id: "19",
    image:
      "https://www.investopedia.com/thmb/4uxETa2k6mg-ZqqwyEI--RhvHiE=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ua-5bfc47bd46e0fb0026623539.jpg",
    alt: "Analyzing Porters Five Forces Under Armour",
    link: "https://www.investopedia.com/articles/markets/020316/analyzing-porters-five-forces-under-armour-ua.asp",
    author: "By Barclay Palmer",
  },
  {
    id: "20",
    image:
      "https://www.investopedia.com/thmb/332Ad4pP1c1hXLBZu--YPS6mzvE=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/investing16-5bfc2b8fc9e77c00519aa657.jpg",
    alt: "Shareholder Register",
    link: "https://www.investopedia.com/terms/s/shareholder-register.asp",
    author: "By Marshall Hargrave",
  },
];

function Investments() {
  // useEffect(()=>{
  //     let body=document.getElementsByTagName("body")

  //     if(body){
  //      body[0].style.backgroundImage="blue"
  //     }

  //  },[])
  // let n =["sangtho","guru","ramesh"]

  return (
    <div>
      <div style={{ color: "grey", fontSize: "25px", padding: "10px 2px" }}>
        Investing differs from trading in that investing is for the long-term,
        usually years or decades. Investing is one of the key strategies to
        building long-term wealth and financial security.
      </div>

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
      <div>
        <div style={{ padding: "10px 0px" }}></div>
      </div>
      <div>
        <p style={{fontSize : '25px', textAlign: 'center',color: 'grey'}}>Best Books to Learn About Investment</p>
        <br />
        <InvestmentBooks />
      </div>
      <br />
      <div style={{textAlign : 'center', color: 'grey', fontSize : '25px'}}>More in<span style={{color: 'darkblue', fontSize : '25px', fontWeight : 'bold'}}>Investment</span></div>
      <br />
      <div className='moreinnews'>
        <Link to="https://www.investopedia.com/loan-basics-4689731"className='link'>LOAN |</Link> 
        <Link to = "https://www.investopedia.com/insurance-4427716" className='link'> INSURANCE | </Link>
        <Link to = "https://www.investopedia.com/banking-4427754" className='link'>BANKING | </Link>
        <Link to = "https://www.investopedia.com/mortgage-4689703" className='link'>MORTGAGE | </Link>
        <Link to = "https://www.investopedia.com/credit-and-debt-4689724" className='link'>CREDIT & DEBT | </Link>
        <Link to = "https://www.investopedia.com/taxes-4427724" className='link'>TAXES | </Link>
        <Link to = "https://www.investopedia.com/credit-card-4689721" className='link'>CREDIT CARD | </Link>
        <Link to = "https://www.investopedia.com/family-finances-4689715" className='link'>FAMILY FINANCE | </Link>
        <Link to = "https://www.investopedia.com/retirement-planning-4689695" className='link'>RETIREMENT PLANNING | </Link>
        <Link to = "https://www.investopedia.com/financial-literacy-5224001" className='link'>FINANCIAL LITERACY | </Link>
        <Link to = "https://www.investopedia.com/wealth-4689687" className='link'>WEALTH |</Link>
      </div>
    </div>
  );
}

export default Investments;