import { Routes, Route} from 'react-router-dom';
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import SplashScreen from './components/splash-screen/SplashScreen'
import Home from './pages/Homepage';
import Stock from './components/stock';
import Details from './components/details';
import BalanceSheet from './components/balanceSheet';
import ResetPassword from './components/auth/ResetPassword';

function App() {
  return (
    <>
    <Routes>
    <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<SplashScreen />} />
          <Route path= "/stock" element={<Stock />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/balanceSheet/:id" element={<BalanceSheet />} />
    </Routes>
    </>
  );
}

export default App;
