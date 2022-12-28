import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import GRAPHIC from './components/GRAPHIC';
import Footer from './components/Footer'
import Formultimaate from './components/Formultimaate';

import Top from './components/Top';
import Slidercomp from './components/Slider';
import Movinghead from './components/Movinghead';





const App = () => {
 

  return (
    <>
    <Movinghead/>
    <Top/>
    <Navbar />
<Landing/>
<GRAPHIC/>
<Slidercomp/>


<Formultimaate/>
<Footer/>

    </>
  );
}

export default App;
