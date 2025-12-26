```javascript
import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import { HelmetProvider } from 'react-helmet-async';
import Loader from './components/layout/Loader';
import Overlay from './components/layout/Overlay';
import CustomCursor from './components/layout/CustomCursor';
import SoundManager from './components/core/SoundManager';
import ProfileDOM from './components/dom/ProfileDOM';
import MissionModal from './features/dashboard/MissionModal';
import BlackBoxModal from './features/dashboard/BlackBoxModal';
import SEO from './components/core/SEO';
import { useStore } from './hooks/useStore';

import GlobalErrorBoundary from './components/core/GlobalErrorBoundary';
import SceneManager from './components/core/SceneManager';
import { LORE } from './data/lore';

const App = () => {
  const { currentScene } = useStore();

  // Always start from boot scene on refresh (no scene param sync on mount)
  // URL sync: only update URL for non-boot scenes
  useEffect(() => {
    // Mobile Performance Optimization: Auto-switch to LOW mode
    const isMobile = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      useStore.getState().setPerformanceMode('low');
      console.log('[System] Mobile detected. Performance mode set to LOW.');
    }

    if (currentScene !== 'boot') {
      const url = new URL(window.location);
      url.searchParams.set('scene', currentScene);
      window.history.pushState({}, '', url);
    } else {
      // Clear scene param when on boot
      const url = new URL(window.location);
      url.searchParams.delete('scene');
      window.history.replaceState({}, '', url);
    }
  }, [currentScene]);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <div className="w-full h-screen bg-background text-text selection:bg-primary/30 selection:text-white cursor-none overflow-hidden">
          <Helmet>
            <title>Yesol Heo | Cinematic Metaverse Director</title>
            <meta name="description" content="A Cinematic 3D Portfolio of Yesol Heo, Metaverse & XR Project Manager." />
          </Helmet>

          <CustomCursor />
          <SoundManager />

          {/* 3D Scene Layer */}
          <Suspense fallback={<div className="flex items-center justify-center h-screen text-white font-mono text-xl animate-pulse tracking-widest">{LORE.SYSTEM.LOADING}</div>}>
            <Experience />
          </Suspense>

          {/* UI Overlay Layer */}
          <Overlay />

          {/* DOM Content Layer (For Profile Scroll Reliability) */}
          {currentScene === 'profile' && <ProfileDOM />}

          {/* Phase 34: Mission Modal (Planetary Archives) */}
          <MissionModal />

          {/* Phase 35: Black Box Modal (DevLog) */}
          <BlackBoxModal />
        </div>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
```
