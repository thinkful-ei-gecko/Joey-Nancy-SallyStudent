import React from 'react';
import Header from './composition/header';
import Address from './composition/address';
import Education from './composition/education';
import Employment from './composition/employment';


function App() {
  return (
    <div className="App">
      <Header />
      <Address />
      <Education />
      <Employment />
    </div>
  );
}

export default App;
