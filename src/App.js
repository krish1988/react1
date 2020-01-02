import React from "react";
import "./resources/styles.css";
import {Element} from 'react-scroll';

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from './components/venueNfo';
import Highlights from "./components/highlights/index";
import Pricing from "./components/pricing/index";
import Location  from "./components/location/index";
import Footer from "./components/header_footer/footer";
function App() {
  return (
    <div className="App" style={{height:"1500px", background: 'cornflowerblue'}}>
      <Header />

      

      <Element name="Event start">
      <Featured/>
      </Element>
      
      <Element name="VenueNfo">
        <VenueNfo/>
        </Element>

      <Element name="Hightlight">
      <Highlights/>
      </Element>

      <Element name="Pricing">
      <Pricing/>
      </Element>
      
      <Element name="Location">
        <Location/>
        </Element>
      <Footer/>
    </div>
  );
}

export default App;
