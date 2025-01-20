'use client';
import './LanguageSwitcher.css';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Wyciągnięcie aktualnego języka z URL (pierwszy segment ścieżki)
  const currentLang = pathname.split('/')[1];

  const switchLanguage = (newLang) => {
    const segments = pathname.split('/');
    segments[1] = newLang; // Zmieniamy pierwszy segment na nowy język
    const newPath = segments.join('/');

    router.push(newPath); // Przekierowanie na nowy URL
  };

  return (
    <div>
      <button
        className={`language-btn ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => switchLanguage('en')}
      >
        English
      </button>
      <button
        className={`language-btn ${currentLang === 'pl' ? 'active' : ''}`}
        onClick={() => switchLanguage('pl')}
      >
        Polski
      </button>
    </div>
  );
}
