import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import RouteOfApp from './routes'

// import './global.css'

function App() {
  return (
    <Router>
      <RouteOfApp />
    </Router>
  );
}

export default App;