
import React from "react";
import "./commonResource/css/styles.css";
// import "./commonResource/js/bootstrap";
import "./commonResource/css/bootstrap.css";
import Header from "./components/Header";
import Sectionone from "./components/Sectionone";
import Sectiontwo from "./components/Sectiontwo";
import Sectionthree from "./components/Sectionthree";
import Sectionfour from "./components/Sectionfour";
import Sectionfive from "./components/Sectionfive";
import Sectionsix from "./components/Sectionsix";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <Sectionsix />
      <Footer />
    </div>
  );
}

export default App;
