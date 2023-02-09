import './App.css';
import React from 'react'
import ForwardCounter from './component/ForwardCounter';
import BackwardCounter from './component/BackwordCounter';


function App()
{
  return(
    <React.Fragment>
      <ForwardCounter></ForwardCounter>
      <BackwardCounter></BackwardCounter>
    </React.Fragment>
    
  );
}
export default App

