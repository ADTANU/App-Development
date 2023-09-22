
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Sign from './components/sign';
import AdminDashboard from './components/admindashboard';
import ForgotPassword from './components/forgot';
import Transaction from './components/transaction';
import Exchange from './components/exchange';
import User from './components/user.jsx';
import Feedback from './components/feedback';
import Setting from'./components/setting.jsx';
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
        <Route path="/dash" element={<AdminDashboard />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/user" element={<User />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
    </Router>
  );
}

export default App;
