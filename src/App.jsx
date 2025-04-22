import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
    script.type = 'module';
    script.onload = () => {
      
      setTimeout(() => {
        new window.Landbot.Container({
          container: '#myLandbot',
          configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2883056-9JOH9NXR79XK7R63/index.json',
        });
      }, 100);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <script SameSite="None; Secure"  type="module" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"></script>
      <div id="myLandbot" style="width: 100%; height: 500px"></div>
    </>
  )
}

export default App
