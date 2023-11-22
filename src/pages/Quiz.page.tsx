import Quiz from '../components/Quiz/Quiz';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { TotalScoreProvider } from '../components/TotalScoreContext';
import { signal } from '@preact/signals';

export const selectedAnswers = signal<Map<number, string>>(new Map());

export default function QuizPage() {
  return (
    <>
      <ColorSchemeToggle />
      <TotalScoreProvider>
        <Quiz />
      </TotalScoreProvider>
    </>
  );
}
