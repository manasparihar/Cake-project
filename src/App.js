import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './componenet/navBar/navBar'
import Footer from './componenet/footer/Footer'
import HomePage from './componenet/Home.jsx'
import Shopping_cart from './componenet/cart/ShoppingCart.jsx'
import About from './componenet/About/About.jsx'
import Shop from './componenet/Shop/Shop.jsx'
import Contact from './componenet/Contact/Contact.jsx'
import Home1 from './componenet/Home/Home1.jsx'
import {CakePro} from './componenet/Shop/Product.jsx'
import {CupCakePro} from './componenet/Shop/Product.jsx'
import {BreadPro} from './componenet/Shop/Product.jsx'
import { CookiesPro } from './componenet/Shop/Product.jsx'
import { RollsPro } from './componenet/Shop/Product.jsx'
import { DonutPro } from './componenet/Shop/Product.jsx'
import Login from './componenet/Login/Login1.jsx'
import SignUp from './componenet/Login/Signup.jsx'
import CheckOut from './componenet/Check Out/CheckOut.jsx'
import {AdminPannel} from './componenet/Adminpannel/AdminPannel.jsx'
import ContactTable from './componenet/Adminpannel/ContactTable.jsx'
import SignInTable from './componenet/Adminpannel/SignInTable.jsx'
import OrderTable from './componenet/Adminpannel/OrderTable.jsx'
import ClassRegTable from './componenet/Adminpannel/ClassRegTable.jsx'
import AdminLogin from './componenet/Adminpannel/login.jsx'
import './App.css';
function Layout() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/Login' && location.pathname !== '/Signup' && <NavBar />}
      
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shopping" element={<Shopping_cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CakePro" element={<CakePro />} />
        <Route path="/CupCakePro" element={<CupCakePro />} />
        <Route path="/BreadPro" element={<BreadPro />} />
        <Route path="/DonutPro" element={<DonutPro />} />
        <Route path="/CookiesPro" element={<CookiesPro />} />
        <Route path="/RollsPro" element={<RollsPro />} />
        <Route path="/AdminPannel" element={<AdminPannel />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/ContactTable" element={<ContactTable />} />
        <Route path="/SignInTable" element={<SignInTable />} />
        <Route path="/OrderTable" element={<OrderTable />} />
        <Route path="/ClassRegTable" element={<ClassRegTable />} />
      </Routes>
      {location.pathname !== '/' && location.pathname !== '/Login' && location.pathname !== '/Signup' && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App