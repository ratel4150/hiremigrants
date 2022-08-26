import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Body from './components/Body/BannerSearch';
import Footer from './components/Footer';
import Header from './components/Header';
import FormCompany from './components/Forms/FormCompany';
import Login from './components/Forms/Login';
import Card from "./components/Migrants/Card";
import BannerCompany from './components/Body/Forms/BannerCompany';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Card />
      <BannerCompany/>
      <FormCompany/>
      
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
