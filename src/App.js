import './App.css';
import { useSelector } from 'react-redux';
import AppLayout from './components/AppLayout/AppLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import AdminLogin from './components/AdminLayout/AdminLogin/AdminLogin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  const authAdmin = useSelector(state => state.authAdmin.authData.token);

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/admin/*' element={<PrivateRoute auth={authAdmin} navigateTo='/admin-login'/>}>
              <Route path="/admin/*" element={<AdminLayout />} />
            </Route>
            <Route path="/admin-login" element={<AdminLogin />} />

            <Route path="/*" element={<AppLayout/>} />    

          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
