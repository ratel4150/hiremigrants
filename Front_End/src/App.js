import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Migrants/Card";


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
