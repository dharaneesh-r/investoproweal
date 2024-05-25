import React from 'react'
import Container from './Container';

let data = [
  {
    id : '1',
    image : 'https://www.investopedia.com/thmb/YwuprrWrd5lkeHttUGFB_2WfDfM=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GuidetoWealthPreservation-recirc3-v1-5e58c8e087884762bdfa52c83e698b32.png',
    alt : "How to Set Financial Goal for you're future",
    link : 'https://www.investopedia.com/articles/personal-finance/100516/setting-financial-goals/',
    author : 'By Amy Fontinelle',
  },
  {
    id : 2,
    image : 'https://www.investopedia.com/thmb/L-pvEn8e9HLLLZOvOXopWjpAJtI=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/paying-bills-kitchen-400x400-820a644e68054baf82bf9de2062188fa.jpg',
    alt : 'Basis of Financial Responsibiliies',
    link : 'https://www.investopedia.com/articles/pf/09/financial-responsibility.asp',
    author : 'By Lisa Smith',
  },
  {
    id : '3',
    image : 'https://www.investopedia.com/thmb/TH94yr0OxRPCILufL2fbLB7u_28=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shopping-bags-200-be5edebd6ec64cf2a3b6f664fd3039c4.jpg',
    alt : 'Top 10 Most Common Financial Mistakes',
    link : 'https://www.investopedia.com/personal-finance/most-common-financial-mistakes/',
    author : 'By Emily Norris',
  },
  {
    id : '4',
    image : 'https://www.investopedia.com/thmb/mZKvOBOW0aZcolWUyAtsZQREU5M=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ejOLS-federal-reserve-average-and-median-available-aprs1-e48533809d734190b1b0a6fb465d2215.png',
    alt : 'Average Credit Card Interest Rate For April 2024',
    link : 'https://www.investopedia.com/average-credit-card-interest-rate-5076674',
    author : 'By Ben Woolsey',
  },
  {
    id : '5',
    image : 'https://www.investopedia.com/thmb/xp0J2Um_R1-FCWLdVt3QPfnEi2U=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/deskworking-87f068a50d0f47eab554b7e436749dea.jpg',
    alt : 'How many Saving Accounts Should I Have ?',
    link : 'https://www.investopedia.com/how-many-savings-accounts-should-i-have-7775519',
    author : 'By Dawn Papandera',
  },
  {
    id : '6',
    image : 'https://www.investopedia.com/thmb/ugEM2IB_tT4R5fU_w9q8ilLlvYY=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1445618287-a8f62a355eb04c7d965dc340afbd725c.jpg',
    alt : 'Financial Assistance for Native Americans',
    link : 'https://www.investopedia.com/financial-assistance-for-native-americans-8380363',
    author : 'By Daniel Thomas Mollenkamp',
  },
  {
    id : '7',
    image : 'https://www.investopedia.com/thmb/-rodvi2HQ37pNY5MoFKXDMuHriA=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/construction2-2764b203c52d49feaf16e6cf7a68bd70.jpg',
    alt : 'What is Inland Marine Insurance',
    link : 'https://www.investopedia.com/what-is-inland-marine-insurance-7643848',
    author : 'By Marianne Bonner ',
  },
  {
    id : '8',
    image : 'https://www.investopedia.com/thmb/3_eZN-TIJoahmQrWSN0E2ZNCYS0=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/publicbank2-3f2e22c633294b40b32d691c8b127a03.jpg',
    alt : 'What is Public Bank',
    link : 'https://www.investopedia.com/what-is-a-public-bank-7564078',
    author : 'By laToya Irby',
  },
  {
    id : '9',
    image : 'https://www.investopedia.com/thmb/Ghpy3-rmYpVtyHuSBJOkuvQboXE=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/womanwithdog-0f75bd9dd01a4576a7eec879b5e804ba.jpg',
    alt : 'What is Pet Insurance',
    link : 'https://www.investopedia.com/types-of-pet-insurance-7568108',
    author : 'By Lorraine Roberte',
  },
  {
    id : '10',
    image : 'https://www.investopedia.com/thmb/ELG_SGN4rUGTCGwNq3qwdW5ii9E=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/digitalmoneyguideforparents-a69c27270dea46a1913e6ef1b32acc02.jpg',
    alt : 'Venmo, Aplle Wallet and Digital Money Guide for Parents',
    link : 'https://www.investopedia.com/venmo-apple-wallet-digital-money-guide-parents-5220982',
    author : 'By Rae Hertley Berk',
  },
  {
    id : '11',
    image : 'https://www.investopedia.com/thmb/8rom_ao3Ckzc2FUIbQ6QXUjFZvQ=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1210338080-a850894d51454dd287ff8d7acbb5f67b.jpg',
    alt : 'Life Insurance for Disabled',
    link : 'https://www.investopedia.com/life-insurance-disabled-people-5220199',
    author : 'By Samuel F Perkins',
  },
  {
    id : '12',
    image : 'https://www.investopedia.com/thmb/bVWvEAG70PT7oPaiV_EfeYwnuxo=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Handicapped_Access_GettyImages-1207326557-c779c7696d4f4cafa73f10d79f7ed19f.jpg',
    alt : 'Low-Income Housing Options for People with Disabilities',
    link : 'https://www.investopedia.com/low-income-housing-people-disabilities-5220009',
    author : 'By Sameul F Perkins',
  },
  {
    id : '13',
    image : 'https://www.investopedia.com/thmb/IiXUCgaDn9ToZt0FBgRQon29Noc=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EVChargingstationsignontopofstation_Chuyn_Getty._REDUCEDVERTICALjpg-f8cf27a9296d4bb68a20b6bc14fa02c9.jpg',
    alt : 'How Does it Cost to Charge EV for Road Trip',
    link : 'https://www.investopedia.com/cost-to-charge-ev-road-trip-5219817',
    author : 'By Matt Ryan Webber',
  },
  {
    id : '14',
    image : 'https://www.investopedia.com/thmb/J0z5kMQ2pyRQDsGlBnbnvQtydpo=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1171809491-9c00ddf67f074d3ab2ca7708de11e826.jpg',
    alt : 'Eligible Expenses for ABLE Account',
    link : 'https://www.investopedia.com/able-account-eligible-expenses-5217840',
    author : 'By Matt Ryan Webber',
  },
  {
    id: '15',
    image : 'https://www.investopedia.com/thmb/iJWD4RNbDAa2Gkz5bK8_JGAC_GU=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-483787493-164ef6627560471f99497920d3769614.jpg',
    alt : 'How much Money can you make and still be Eligible for SSI',
    link : 'https://www.investopedia.com/how-much-money-can-you-make-ssi-eligibility-5217422',
    author : 'By Sameul Becker',
  },
  {
    id : '16',
    image : 'https://www.investopedia.com/thmb/qufoaQ7-XS5pZq0B1f4uR2yHbro=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/who-is-andrew-w-mellon-what-did-he-accomplish-5217192-v2-79541f06f25f4cacb98d9408ee0e0eb1.png',
    alt : 'Who was Andrew W.Mellon',
    link : 'https://www.investopedia.com/who-is-andrew-w-mellon-what-did-he-accomplish-5217192',
    author : 'By Kat Treina',
  },
  {
    id : '17',
    image : 'https://www.investopedia.com/thmb/v5Ush6B8jLeMUfqiHhUtbVy1mUU=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OnlineLegal_Tanarat-Kongchuenjit-a4ef9e0e35e3492d97f9edc92d72e517.jpg',
    alt : 'Best Online Legal Service for 2024',
    link : 'https://www.investopedia.com/best-online-legal-services-5113087',
    author : 'By Lisa Bernardi',
  },

  {
    id: '18',
    image : 'https://www.investopedia.com/thmb/Zjg3qESD4VL-HpmtPT4ikKDQwas=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1149285452-fbdff824bded42a088c90f3cdfccb050.jpg',
    alt : 'How Does the Business Loan Affects the Personal Credit ?',
    link : 'https://www.investopedia.com/business-loan-affect-personal-credit-7571375',
    author : 'By Holly Johnson',
  },
  {
    id : '19',
    image : 'https://www.investopedia.com/thmb/svWvn8QG4h7Nbq4b5QI0OrAtbHI=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1217818877-9c65e2d7a707444a815f2ff9b4a9b9f4.jpg',
    alt : 'Loan Calculator',
    link : 'https://www.investopedia.com/loan-calculator-5104934',
    author : 'By Investopedia Team',
  },
  {
    id : '20',
    image : 'https://www.investopedia.com/thmb/kclrsVJ_wKwJ84QyLFXoT0itQVs=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-74596863_1800-890631818d454cf6a31348456cb27fef.png',
    alt : 'Guide to Emergency-proofing Youre Finance',
    link : 'https://www.investopedia.com/emergency-proof-your-finances-4800551',
    author : 'By Jean Folger',
  },
]

function Finance() {
  // useEffect(()=>{
  //    let body=document.getElementsByTagName("body")

  //    if(body){
  //     body[0].style.backgroundColor="red"
  //    }

  // },[])`

  return (
    <div>
      <div style={{ color: "grey", fontSize: "25px", padding: "10px 2px" }}>
      Personal finance encompasses the whole universe of managing individual and family finances, taking responsibility for your current and future financial situation, and setting financial goals. It also includes handling individual financial tasks and saving for emergencies.
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
      <br />
    </div>
  );
}

export default Finance