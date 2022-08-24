import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
