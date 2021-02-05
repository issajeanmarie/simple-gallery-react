import React from 'react';
import './Components/Styles/Style.min.css';
import Header from './Components/Header.jsx';
import Welcome from './Components/Welcome.jsx';
import TheData from './Components/TheData.jsx';
import Footer from './Components/Footer.jsx';


const App = () => {
  return(
    <React.Fragment>
      <Header />
      <Welcome />

      <TheData categoryName = 'People' category = 'people' />
      <TheData categoryName = 'Nature' category = 'nature' />
      <TheData categoryName = 'Tech' category = 'tech' />
      <TheData categoryName = 'Animal' category = 'animals' />
      <TheData categoryName = 'Architecture' category = 'arch' />

      <br /><br /><br />
      <Footer />
      
    </React.Fragment>
  )
}

export default App;