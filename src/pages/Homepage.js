import { Link } from 'react-router-dom';
import './homepage.css';
import { signout } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate(); 

  const handleSignOut = () => {
    dispatch(signout());
    history("/"); 
  };

  return (
    <>
      <section className="welcome">
        <div className="home">
          <h1>Welcome to Stock Screener-Investment App – Your Gateway to Smart Investing!</h1>
          <div className="home-image"> </div>
          <p className="home-paragraph">
            Embark on a journey of financial growth with our powerful stock screener and investment tools. Whether you&apos;re a seasoned investor or just starting, we&apos;re here to empower you with the insights and tools you need to make informed decisions.
          </p>
          <p className="home-paragraph">
            Explore real-time market data, discover potential investment opportunities, and stay ahead of market trends.
          </p>
          <p>
            Our user-friendly interface and powerful features make it easy for you to navigate the world of finance.
          </p>
          <p className="home-paragraph">
            Ready to take control of your financial future? Let&apos;s get started together!
          </p>
          <div className="home-buttons">
            <Link to="/stock">
              <button type="button" className="btn-primary">Explore Stocks</button>
            </Link>
            <button type="button" onClick={handleSignOut} className="btn-primary">
              Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
