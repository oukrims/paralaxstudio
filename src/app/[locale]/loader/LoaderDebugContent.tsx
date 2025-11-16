'use client';

import { useState } from 'react';

import { LoadingScreen } from '@/components/ui/loading-screen';

export function LoaderDebugContent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <LoadingScreen isLoading={isLoading} />

      {/* Debug Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10004] flex gap-4">
        <button
          onClick={() => setIsLoading(true)}
          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors"
        >
          Show Loader
        </button>
        <button
          onClick={() => setIsLoading(false)}
          className="px-6 py-3 bg-neutral-800 text-white rounded-full font-medium hover:bg-neutral-700 transition-colors"
        >
          Hide Loader
        </button>
      </div>

      {/* Info */}
      <div className="container mx-auto px-6 pt-32 pb-24 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Loading Screen Debug</h1>
        <div className="space-y-4 text-neutral-300">
          <p>
            This page allows you to preview and debug the animated loading screen.
          </p>
          <div className="bg-neutral-900 rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-semibold text-white mb-4">Animation Features:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>SVG path drawing animation for the PLX logo</li>
              <li>Staggered letter appearance (P → L → X)</li>
              <li>Pulsing background parallelogram</li>
              <li>Border outline animation</li>
              <li>Fade in/out loading text</li>
              <li>Animated loading dots</li>
              <li>Smooth exit transition</li>
            </ul>
          </div>
          <div className="bg-neutral-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Controls:</h2>
            <p className="mb-2">Use the buttons at the bottom of the screen to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Show Loader</strong> - Display the loading screen</li>
              <li><strong>Hide Loader</strong> - Trigger the fade out animation</li>
            </ul>
          </div>
          <div className="bg-neutral-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Technical Details:</h2>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Z-index:</strong> 10003 (above navbar)</li>
              <li><strong>Background:</strong> #050505 (matching site)</li>
              <li><strong>Framework:</strong> Framer Motion</li>
              <li><strong>Logo:</strong> /public/logo.svg</li>
              <li><strong>Exit Duration:</strong> 800ms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
