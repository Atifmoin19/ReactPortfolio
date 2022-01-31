import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Reactproject from './components/Reactproject';





const App = () => {
  const cssStyle={};
const theme = ()=>{
  // console.log("Clicked")
cssStyle.background = 'green';
}
  return (
    <>
    <Navbar />
<Landing/>
<Reactproject/>

    </>
  );
}

export default App;
