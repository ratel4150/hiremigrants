import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Body from './components/Body/Body';
import Company from './components/Company';
import CompanyParteII from './components/CompanyParteII';
import Footer from './components/Footer';
import Header from './components/Header';
import FormCompany from './components/Forms/FormCompany';

import Card from "./components/Migrants/Card";
import BannerCompany from './components/Body/Forms/BannerCompany';
import NavBar from './components/Body/Forms/NavBar';
import BannerWorkPosition from './components/Body/BannerWorkPosition';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Migrants from "./pages/Migrants"
import Company from "./pages/Company"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">

      <Header/>
      <Body/>
      <CompanyParteII/>
      <Footer/>

    </div>
  );
}

export default App;
