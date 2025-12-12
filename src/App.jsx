import { Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Experience from './components/Experience';
import Overlay from './components/Overlay';
import CustomCursor from './components/CustomCursor';
import ProfileDOM from './components/ProfileDOM';
import { useStore } from './hooks/useStore';

import GlobalErrorBoundary from './components/GlobalErrorBoundary';

function App() {
  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <div className="w-full h-screen bg-background text-text selection:bg-primary/30 selection:text-white cursor-none overflow-hidden">
          <Helmet>
            <title>Yesol Heo | Cinematic Metaverse Director</title>
            <meta name="description" content="A Cinematic 3D Portfolio of Yesol Heo, Metaverse & XR Project Manager." />
          </Helmet>

          <CustomCursor />

          {/* 3D Scene Layer */}
          <Suspense fallback={<div className="flex items-center justify-center h-screen text-white font-mono">INITIALIZING SYSTEM...</div>}>
            <Experience />
          </Suspense>

          {/* UI Overlay Layer */}
          <Overlay />

          {/* DOM Content Layer (For Profile Scroll Reliability) */}
          {useStore((state) => state.currentScene) === 'profile' && <ProfileDOM />}
        </div>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
