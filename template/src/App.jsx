import React from 'react';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';

const App = ({ webData }) => {
  return (
    <div>
      <Hero title={"[[Quick | Fast | Speedy]] delivery service in Dhaka"} />

      <Contact phone={webData.phone || "01785****79"} address={webData.address || "Demo"} />


    </div>
  );
};

export default App;