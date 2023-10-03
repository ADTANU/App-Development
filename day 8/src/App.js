import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Sign from './components/sign';
import Dashboard from './components/admindashboard';
import ForgotPassword from './components/forgot';

import Exchange from './components/exchange';
import User from './components/user';

import Setting from'./components/setting';
import PrivacyPolicy from './components/privacy';
import TermsAndConditions from './components/terms';
import FAQ from './components/faq';
import ContactUs from './components/contact';
import Landing from './components/landing';
import ContactDetails from './components/contactdetails';
import App1 from './components/Newdashboard';
import Transaction from './components/transaction';
import Feedback from './components/feedback';

function App() {
  const Routing =() =>{
    const PrivateRoute=({children})=>{
      
    }
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/user" element={<User />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsAndConditions/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/contactdetails" element={<ContactDetails/>} />
        <Route path="/newdash" element={<App1/>} />
      </Routes>
    </Router>
  );
}

export default App;
