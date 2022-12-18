import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import GRAPHIC from './components/GRAPHIC';
import Footer from './components/Footer'
import Formultimaate from './components/Formultimaate';

import Top from './components/Top';
import Slidercomp from './components/Slider';





const App = () => {
  const cssStyle={};
const theme = ()=>{
  // console.log("Clicked")
cssStyle.background = 'green';
}
  return (
    <>
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
