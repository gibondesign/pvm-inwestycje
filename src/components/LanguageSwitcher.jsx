'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang) => {
    // Bieżąca ścieżka, np. "/en/about-us"
    const segments = pathname.split('/'); // Rozbijamy ścieżkę na segmenty
    segments[1] = newLang; // Zmieniamy pierwszy segment na nowy język
    const newPath = segments.join('/'); // Składamy nową ścieżkę

    router.push(newPath); // Przekierowanie na nowy URL
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('pl')}>Polski</button>
    </div>
  );
}
