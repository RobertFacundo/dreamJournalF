import { Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import { useState } from 'react';
import { FixedBackground } from './components/Background/FixedBackground';
import { ParallaxBackground } from './views/ParallaxBackground';
import { Footer } from './components/Home/Footer';
import './app.scss';
import { Auth } from './views/Authentication';

function App() {
  const [parallaxDone, setParallaxDone] = useState(false);
  const [showMoonModal, setShowMoonModal] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/Home';

  return (
    <>
      {!parallaxDone ? (
        <ParallaxBackground onParallaxComplete={() => setParallaxDone(true)} />
      ) : (
        <>
          <FixedBackground moonOpacity={1} onMoonClick={isHome ? () => { console.log('🌕 Luna clickeada'); setShowMoonModal(true) } : undefined} />
          <Routes>
            <Route path='/' element={<Auth />} />
            <Route path='/Home' element={<Home showMoonModal={showMoonModal} setShowMoonModal={setShowMoonModal} />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
