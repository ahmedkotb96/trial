// Entry point for the React app; renders the App component and sets up scroll animations.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // <-- Make sure this line exists

// Add intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

// Observe all sections after render
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
  });
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
