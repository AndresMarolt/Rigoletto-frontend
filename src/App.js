import './App.css';
import { useSelector } from 'react-redux';
import AppLayout from './components/AppLayout/AppLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './components/AdminLayout/AdminLogin/AdminLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserLogin from './components/AppLayout/UserLogin/UserLogin';
import UserSignup from './components/AppLayout/UserSignup/UserSignup';

function App() {

  const authAdmin = useSelector(state => state.authAdmin.authData?.token);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/admin/' element={<PrivateRoute auth={authAdmin} navigateTo='/admin-login'/>}>
            <Route path="/admin/" element={<AdminLayout />} />
            <Route path="/admin/*" element={<AdminLayout />} />
          </Route>
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />

          <Route path="/*" element={<AppLayout/>} />    

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
