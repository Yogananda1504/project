
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Import ParallaxProvider
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap App with ParallaxProvider if not already wrapped in App.tsx */}
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);