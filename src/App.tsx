import '@fontsource-variable/inter';
import Header from '@/layouts/Header/Header';
import Shortcuts from '@/layouts/Shortcuts/Shortcuts';
import Stories from '@/components/Stories/Stories';
import Suggestions from './components/Suggestions/Suggestions';

const App = () => {
  return (
    <div>
      <Header />
      <main className='bg-main-bg grid grid-cols-12 gap-5 px-10 min-h-screen'>
        <Shortcuts />
        <Stories />
        <Suggestions />
      </main>
    </div>
  );
};

export default App;
