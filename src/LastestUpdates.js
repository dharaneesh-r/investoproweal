import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

let data = [
    {
        // image : 'https://www.livemint.com/lm-img/img/2024/04/23/90x90/WTO-Electronic-Commerce-0_1713884447050_1713884897942.jpg',
        link : 'https://www.livemint.com/market/stock-market-news/spotify-shares-rally-16-after-q1-gross-profit-tops-1-billion-euros-11713884447771.html',
        title : 'Spotify Shares Rally 16% after Q1 Gross Profit',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/wall-street-today-us-stocks-gain-led-by-chip-shares-11713878238694.html',
        title : 'US Stocks Gain on Robust Earnings ',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/tesla-shares-edge-higher-ahead-of-quarterly-results-as-elon-musk-struggles-amid-price-cuts-layoffs-11713875792290.html',
        title : 'Tesla Shars Edge Higher Ahead Of Quarterly Result',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/renewable-energy-stocks-jump-up-to-500-in-1-year-whats-fuelling-this-rise-what-should-you-buy-from-the-sector-11713874717556.html',
        title : 'Renewable Energy Stocks Jumps to 500% in One Year',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/nse-to-waive-transaction-charges-for-futures-and-options-contracts-on-nifty-next-50-index-from-april-24-till-october-31-11713873829063.html',
        title : 'NSE to Waive Transaction Charges for F&O Contracts',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/mamaearth-parent-honasa-consumer-share-price-rises-8-jefferies-sees-it-as-high-conviction-pick-with-34-more-gains-11713857638309.html',
        title : 'MamaEarth Parent Honasa Consumer Share rise upto 8%',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/sakuma-exports-rights-issue-2024-price-date-to-entitlement-ratio-top-5-details-11713865479225.html',
        title : 'Sakuma Exports Rights Issue 2024',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/paints-sector-inflation-and-intensifying-competition-pose-double-threat-asian-paints-akzo-nobel-indigo-paints-11713856264994.html',
        title: 'Paint Sector Inflation and Intensifying Competition Pose Double Threat',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/vibhor-steel-tubes-share-price-jumps-nearly-100-in-two-months-should-you-buy-sell-or-hold-11713861630681.html',
        title : 'Vibhor Steel Tubes Share Price Jumps upto 100% in 2 months',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/circuittocircuit-stock-multibagger-penny-stock-hits-upper-circuit-for-third-day-in-a-row-11713860418511.html',
        title : 'Multibagger Penny Stock hits Upper Circuit for Third Day',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/expert-view-bfsi-has-valuation-comfort-value-emerging-in-largecap-it-says-amit-premchandani-of-uti-amc-11713853668138.html',
        title : 'Value Emerging LargeCap IT Stocks',
    },
    {
        link : 'https://www.livemint.com/market/stock-market-news/kp-energy-share-price-hits-5-upper-circuit-on-bagging-a-9mw-wind-power-project-contract-in-gujarat-11713849655732.html',
        title : 'KP Energy Share price Hits 5% Upper Circuit on bagging a 9MW',
    },
]

function LastestUpdates() {
  return (
    <Marquee pauseOnHover>
        {data.map((data) => {
            return (
                <div className='updates'style={{gap: '30px'}}>
                    <Link to={data.link} style={{textAlign:  'center',padding: '5px'}}>{data.title}</Link>
                </div>
            )
        })}
  </Marquee>
  )
}

export default LastestUpdates