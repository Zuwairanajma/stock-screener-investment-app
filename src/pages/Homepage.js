import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

const Home = () => {
  return (
    <>
    <section className='welcome'>
      <div className="home">
        <h1>Welcome to Stock Screener-Investment App – Your Gateway to Smart Investing!</h1>
        <div className='home-image'> </div>
        <p className="home-paragraph">
          Embark on a journey of financial growth with our powerful stock screener and investment tools. Whether you're a seasoned investor or just starting, we're here to empower you with the insights and tools you need to make informed decisions.
        </p>
        <p className="home-paragraph">
          Explore real-time market data, discover potential investment opportunities, and stay ahead of market trends. Our user-friendly interface and powerful features make it easy for you to navigate the world of finance.
        </p>
        <p className="home-paragraph">
          Ready to take control of your financial future? Let's get started together!
        </p>
        <div className="home-buttons">
          <Link to="/stock">
            <button className="btn-primary">Explore Stocks</button>
          </Link>
        </div>
      </div>
      </section> 
    </>
  );
};

export default Home;
