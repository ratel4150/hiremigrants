import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Body from './components/Body/BannerSearch';
import Footer from './components/Footer';
import Header from './components/Header';
import FormCompany from './components/Forms/FormCompany';
import Login from './components/Forms/Login';
import Card from "./components/Migrants/Card";
import BannerCompany from './components/Body/Forms/BannerCompany';
import NavBar from './components/Body/Forms/NavBar';
import BannerWorkPosition from './components/Body/BannerWorkPosition';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body/>
      
      <BannerWorkPosition/>
      <BannerCompany/>
      
      <Card />
      {/* <FormCompany/> */}
      
      {/* <Login/> */}
      <Footer/>
    </div>
  );
}

export default App;
