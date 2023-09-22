
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Sign from './components/sign';
import AdminDashboard from './components/admindashboard';
import ForgotPassword from './components/forgot';
import { useUser } from './components/context/UserContext';

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
      </Routes>
    </Router>
  );
}

export default App;
