import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';


import Formultimaate from './components/Formultimaate';





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
<Formultimaate/>

    </>
  );
}

export default App;
