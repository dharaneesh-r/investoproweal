import React from 'react'
import { BrowserRouter,Link, Outlet, Route, Routes } from 'react-router-dom'
import Mutual from './Mutual'
import Investments from './Investments'
import Main from './Main'
import Finance from './Finance'
import Banking from './Banking'
import News  from './News'


function App() {
  return (
    <BrowserRouter>
      {/* <nav className = "navbar">
        <Routes>
            <Route path="/welcome" element={} />
            <Route path="/thanks" element={} />
        </Routes>
      </nav> */}
      <header>
        <nav className="container">
          <Link
            style={{ width: "30%", fontWeight: "bold", fontSize: "25px" }}
            to="/"
          >
            Investoproweal
          </Link>
          <Link to="/Investments">Investments</Link>
          <Link to="/Mutual">Mutual Funds</Link>
          <Link to="/Finance">Personal Finance</Link>
          <Link to="/Banking">Banking</Link>
          <Link to="/News">News</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Investments" element={<Investments />} />
        <Route path="/Mutual" element={<Mutual />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/Banking" element={<Banking />} />
        <Route path="/News" element={<News />} />
      </Routes>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <h2 className="footer-content-title">Investoproweal</h2>
            <p>
              INVESTOPROWEAL is just for Educational purpose to learn about
              Stock Market, Mutual Funds, Cryptocurrency and all other Financial
              terms, and other kind of Queries and development to the website
              contact below
            </p>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App

