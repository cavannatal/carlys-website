import React from 'react';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeScreen/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
