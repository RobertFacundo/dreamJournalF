import { Router, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import { useState } from 'react';
import { FixedBackground } from './components/Background/FixedBackground';
import { ParallaxBackground } from './views/ParallaxBackground';
import './app.scss';
import { Auth } from './views/Authentication';

function App() {
  const [parallaxDone, setParallaxDone] = useState(false);

  return (
    <>
      {!parallaxDone ? (
        <ParallaxBackground onParallaxComplete={() => setParallaxDone(true)} />
      ) : (
        <>
          <FixedBackground moonOpacity={1} />
          <Routes>
            <Route path='/' element={<Auth />} /> 
            <Route path='/Home' element={<Home />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
