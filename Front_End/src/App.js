import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Body from './components/Body';
import Company from './components/Company';
import CompanyParteII from './components/CompanyParteII';
import Footer from './components/Footer';
import Header from './components/Header';

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
