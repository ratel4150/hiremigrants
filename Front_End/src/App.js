import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Body from './components/Body/BannerSearch';
import Footer from './components/Footer';
import Header from './components/Header';
import FormCompany from './components/Forms/FormCompany';
import Login from './components/Forms/Login';
import Card from "./components/Migrants/Card";

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Card />
      <FormCompany/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
