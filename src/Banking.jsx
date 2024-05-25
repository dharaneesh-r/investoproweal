import React from 'react'
import Container from './Container'
import Marquees from './Marquees'


let data = [
  {
    id : '1',
    image : 'https://www.investopedia.com/thmb/zES0TNTiYcZDwp6WDMKmfpg1b4A=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Investopedia_Banking101_colorv1-ef7ac25979d14d82b220e09c89c01014.png',
    alt : 'Banking 101',
    link : 'https://www.investopedia.com/personal-finance/banking-101/',
    author : 'By Amy fontinelle',
  },
  {
    id : '2',
    image : 'https://www.investopedia.com/thmb/DsgQwf7VsTNUqgVKSDscxB6r2K4=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6-features-your-primary-bank-should-have-47cfbec9bfa64d9a96ce1953a459e029.jpg',
    alt : '6 Features youre Primary Bank Should Have',
    link : 'https://www.investopedia.com/articles/personal-finance/111416/6-features-your-primary-bank-should-have.asp',
    author : 'By Rebecca Lake',
  },
  {
    id : '3',
    image : 'https://www.investopedia.com/thmb/iCyg87zs2rrCWaSYS51m-HPnZPM=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BestCDRates-539e984a15f949aa8928b076e04f11e5.jpg',
    alt : 'Best CD Rates for 2024',
    link : 'https://www.investopedia.com/best-cd-rates-4770214',
    author : 'By Sabrina karl',
  },
  {
    id : '4',
    image : 'https://www.investopedia.com/thmb/eeVVlJq8VqJ7bVIcR2OAWcx6YmQ=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/How-To-Chose-A-BankV2-29cde172a8674e5cb4f20dd4dd1ab7e2.png',
    alt : 'How to Choose the bank',
    link : 'https://www.investopedia.com/how-to-choose-a-bank-5183999',
    author : 'By Kiara Taylor',
  },
  {
    id : '5',
    image : 'https://www.investopedia.com/thmb/hF-jrxoN7Ss361laUEIZgMs-v7g=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/computercoffee-81d41a2e355340ce98d698a66330264e.jpg',
    alt : 'How to Setup Direct Deposit',
    link : 'https://www.investopedia.com/how-to-set-up-direct-deposit-8608909',
    author : 'By John Egan',
  },
  {
    id : '6',
    image : 'https://www.investopedia.com/thmb/SbkoF-wCDVUdnUyIYKUEXA7oOgk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FirstRepublic-9c8b0053547947a8ac6f4c5be27fbebf.jpg',
    alt : 'What Happend to First Republic Bank',
    link : 'https://www.investopedia.com/what-happened-to-first-republic-bank-7489214',
    author : 'By Lora Shinn',
  },
  {
    id : '7',
    image : 'https://www.investopedia.com/thmb/JrZ2MMzN0VhijYIY-R8HiEtxNUs=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/photocheck2-ad2e7fa9624545248cb521197e240eaa.jpg',
    alt : 'How to Make Mobile Check Deposits',
    link : 'https://www.investopedia.com/how-to-make-mobile-check-deposits-7975275',
    author : 'By John Egan',
  },
  {
    id : '8',
    image : 'https://www.investopedia.com/thmb/cV9EmtlIH4cbVhttr454wgMm5Fs=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SVBfailure-a3dab0d9f71e462580a8f24f03c9ba0d.jpg',
    alt : 'All About Silicon Valley Bank',
    link : 'https://www.investopedia.com/what-happened-to-silicon-valley-bank-7368676',
    author : 'By Erin Gobler',
  },
  {
    id : '9',
    image : 'https://www.investopedia.com/thmb/jBY1rNbfKbVY7yYOkejwdIXq9f4=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cdmethodology-29e556ed01884f4dbde8e198606c4e1e.jpg',
    alt : 'Methodolgy for Saving, Money Market and CD Rankings',
    link : 'https://www.investopedia.com/methodology-for-savings-accounts-and-certificates-of-deposit-rankings-7255816',
    author : 'By Sabrina Karl',
  },
  {
    id : '10',
    image : 'https://www.investopedia.com/thmb/HUGfxkRNswMz4JQNmRHTSX9vs14=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/female-employee-helping-female-customer-913342804-08076fb131b54f539e454192cb0c2d3d-421fea9fdde44c82a8b46a973dc1f94b.jpg',
    alt : "How Banks can Serve customer languages Barriers",
    link : 'https://www.investopedia.com/overcoming-language-barriers-in-banking-5218233',
    author : 'By Rae Hertley Beck',
  },
  {
    id : '11',
    image : 'https://www.investopedia.com/thmb/x8MMaDms6uw6uQq6GwjdwQwfIjw=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/historical-interest-rates-for-credit-cards-auto-loans-and-student-loans-5176884-final-786ebbf1264f4d5d9715dfaa6e07c4a1.png',
    alt : 'Interest Rates for Credit Cards, Auto Loans and Mortgages Loans',
    link : 'https://www.investopedia.com/historical-interest-rates-for-credit-cards-auto-loans-and-student-loans-5176884',
    author : 'By Ben Woolsey',
  },
  {
    id : '12',
    image : 'https://www.investopedia.com/thmb/6tFLnfM2iILQ70ZzVjLODrELeE8=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/top-10-asian-american-owned-banks-5079644-v2-2afd58e2c1254c48ac6566fde9f6ec65.jpg',
    alt : 'Top 10 Asian American Owned Banks',
    link : 'https://www.investopedia.com/top-10-asian-american-owned-banks-5079644',
    author : 'By Ward Williams',
  },
  {
    id : '14',
    image : 'https://www.investopedia.com/thmb/jBVVOVkQyvuwltUlQqGHLx6ygwk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1383931917-508ebe9b8cd54519b18ead5441089026.jpg',
    alt : 'Prepaid Debit Cards',
    link : 'https://www.investopedia.com/best-prepaid-debit-cards-5071798',
    author :'By Ben Luthi',
  },
  {
    id : '15',
    image : 'https://www.investopedia.com/thmb/0t9D2QMLNRkCW31aGahMCD65SmA=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/COMMERCIAL-BANK-FINAL-64996d1c0c1748d5994860dd9c190045.jpg',
    alt : 'How Do Commerical Banks Work',
    link : 'https://www.investopedia.com/terms/c/commercialbank.asp',
    author :'By Julia Kagar',
  },
  {
    id : '16',
    image : 'https://www.investopedia.com/thmb/W9sZ-T2pVD54k6DI8beG7qVMx94=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/demanddeposit.asp_final-41b42ecfa1654ddfaa2198d2027486aa.png',
    alt : 'Demand Deposit Definition and its Account Types',
    link : 'https://www.investopedia.com/terms/d/demanddeposit.asp',
    author :'By James Chen',
  },
  {
    id : '17',
    image : 'https://www.investopedia.com/thmb/uu_DA6o0Bj-ZowxjZI3tYk0Iq5I=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FDIC_Seal_by_Matthew_Bisanz-b92facd3f0304834b33c305f7f9b2007.jpeg',
    alt : 'Federal Deposit Insurance',
    link : 'https://www.investopedia.com/terms/f/fdic.asp',
    author :'By Julia Kagar',
  },
  {
    id : '18',
    image : 'https://www.investopedia.com/thmb/_HdYcFXGE0Xc-Y1V7upHTEn0xtk=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/financialinstitution-dc2ec0e00bc44e24adbb9c542f0a03e6.jpg',
    alt : 'What is Financial Institution',
    link : 'https://www.investopedia.com/terms/f/financialinstitution.asp',
    author :'By Adams Hayes',
  },
  {
    id : '19',
    image : 'https://www.investopedia.com/thmb/qFXBO7XufFCoYYtEIL9rXN5cKYM=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/compoundinterest_final-650547aac63145ff804c0dd4edc23e9f.png',
    alt : 'Power Of Compound Interest Calculations and Examples',
    link : 'https://www.investopedia.com/terms/c/compoundinterest.asp',
    author :'By Jason Fernando',
  },
  {
    id : '20',
    image : 'https://www.investopedia.com/thmb/iNq38o3H3Wm7mISHyHsNBbpMAzQ=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/investing7-5bfc2b8d46e0fb0051bddff8.jpg',
    alt : 'Hard Money Vs Soft Money: What is the Difference',
    link : 'https://www.investopedia.com/ask/answers/08/hard-money-soft-money.asp',
    author :'By Barcaly Palmer',
  },
]


function Banking() {
  return (
    <div>
      <div className='style-interest'>
            <Marquees />
      </div>
      <br />
      <div style={{color : 'grey',fontSize : '25px',padding : "10px 2px"}}>Banking in the 21st century means being able to conduct all transactions digitally without needing to physically visit a branch location. Deposits, withdrawals, payments, and transfers can be conducted online or by phone app as well as applications for credit cards and loans.</div>
      
      <div className="style-box">
        {data.map((data) => {
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
export default Banking