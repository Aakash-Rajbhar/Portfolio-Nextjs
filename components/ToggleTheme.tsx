// components/ThemeToggle.tsx
'use client';

import { useTheme } from 'next-themes';
import { Moon_Dance } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <div>
          <Image src={'/moon.svg'} alt="dark mode" width={28} height={28} />
        </div>
      ) : (
        <div>
          <Image src={'/sun.svg'} alt="light mode" width={28} height={28} />
        </div>
      )}
    </button>
  );
}
