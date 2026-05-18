'use client';
import { Window } from '@tauri-apps/api/window';
import { useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import useSound from 'use-sound';

export default function page() {
  const [ribbit, $ribbit] = useLocalStorage('ribbit', 0);
  const [isSfx, $isSfx] = useState(false);
  const [sfx] = useSound('ribbit.mp3');
  const appWindow = new Window('main');

  useEffect(() => {
    if (!isSfx) return; // no user action yet ;-;
    setInterval(() => {
      $ribbit((ribb) => {
        sfx();
        return ribb + 1;
      });
    }, 10000); // eve 10 secs
  }, [isSfx]);

  const mouseDown = async () => {
    if (!isSfx) $isSfx(true);
    await appWindow.startDragging();
  };

  return (
    <div id='app' onMouseDown={mouseDown}>
      <div className='box' key={ribbit}>
        {ribbit}
      </div>
      <img className='frogie' src={isSfx ? '/frogie.gif' : '/frogie.png'} />
    </div>
  );
}
