import { Link } from 'react-router-dom';
import './Login.css';

function ResetPassword() {
  return (
    <section className='form-auth'>
    <div className="container">
      <div className="heading">Reset Password</div>
      <form action="" className="form">
        <input
          required=""
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail" 
        />
        <input
          className="login-button"
          type="submit"
          value="Reset Password"
        />
      </form>
      <span className="agreement">Already have an account?<Link to={'/login'}>Login</Link></span>
    </div>
  </section>
  )
}

export default ResetPassword