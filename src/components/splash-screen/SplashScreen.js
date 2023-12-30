import { Link } from 'react-router-dom';
import './splash.css';

function SplashScreen() {
  return (
    <section id="banner">
      <div className="banner-text">
        <h1>Welcome</h1>
        <p>Be the best stock investor you can be, Learn more about stock investment</p>
        <div className="banner-btn">
          <Link to="/login">
            <span />
            Login
          </Link>
          <Link to="/signup">
            <span />
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SplashScreen;
