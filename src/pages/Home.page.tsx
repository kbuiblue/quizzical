import { Welcome } from '../components/Welcome/Welcome';
import StartButton from '../components/Buttons/StartButton';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <Welcome />
      <StartButton />
    </>
  );
}
