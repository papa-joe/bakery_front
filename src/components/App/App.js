import './App.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/style-responsive.css';
import '../../assets/css/font.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/morris.css';
import '../../assets/css/monthly.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from "react";
import Header from '../layout/header';
import Footer from '../layout/footer';
import Home from '../../pages/home';
import Sidebar from '../layout/sidebar';
import Login from '../../pages/login';
import Users from '../../pages/users';
import Pos from '../../pages/pos';
import Addproduct from '../../pages/add_product';
import Editproduct from '../../pages/edit_product';
import Products from '../../pages/products';
import History from '../../pages/history';
import Adduser from '../../pages/add_user';
import useToken from './useToken';

function App() {
  const [mobile, setMobile] = useState(false)
  const [type, setType] = useState('login')

  const { token, setToken } = useToken(type);

  if(!token) {
    return <Login setToken={setToken} setType={setType} />
  }

  return (
    <div className="App">
      <Router>
        <Header mobile={mobile} setMobile={setMobile} />
        <Sidebar mobile={mobile} setToken={setToken} setType={setType} token={token} />
        <Routes>
          <Route exact path="/" element={<Home mobile={mobile} />} />
          <Route exact path="/users" element={<Users mobile={mobile} />} />
          <Route exact path="/products" element={<Products mobile={mobile} token={token} setToken={setToken} setType={setType} />} />
          <Route exact path="/history" element={<History mobile={mobile} token={token} setToken={setToken} setType={setType} />} />
          <Route exact path="/pos" element={<Pos mobile={mobile} token={token} setToken={setToken} setType={setType} />} />
          <Route exact path="/add-product" element={<Addproduct mobile={mobile} token={token} setToken={setToken} setType={setType} />} />
          <Route exact path="/add-user" element={<Adduser mobile={mobile} token={token} setToken={setToken} setType={setType} />} />
          <Route exact path="/edit-product" element={<Editproduct mobile={mobile} token={token} setToken={setToken} setType={setType} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
