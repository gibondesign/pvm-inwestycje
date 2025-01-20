import { redirect } from 'next/navigation';

export default function Home() {
  // Przekierowanie do domyślnego języka
  redirect('/pl'); // Możesz zmienić na '/pl' lub dodać logikę wyboru języka
}
