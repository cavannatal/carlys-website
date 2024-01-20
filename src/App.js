import React from 'react';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Pricing from './components/Pricing';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeScreen/>
      <Gallery/>
      <Pricing/>
      <Contact/>
    </div>
  );
}

export default App;
