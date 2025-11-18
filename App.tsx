
import React from 'react';
import { BrandKitProvider } from './context/BrandKitContext';
import BrandKitStep from './components/BrandKitStep';
import GeneratorStep from './components/GeneratorStep';
import ResultsStep from './components/ResultsStep';
import { useBrandKit } from './context/BrandKitContext';
import { LogoIcon } from './components/icons/LogoIcon';

const AppContent: React.FC = () => {
  const { step } = useBrandKit();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BrandKitStep />;
      case 2:
        return <GeneratorStep />;
      case 3:
        return <ResultsStep />;
      default:
        return <BrandKitStep />;
    }
  };

  const stepTitles = ["Configure seu Kit de Marca", "Crie seu Post", "Seus Posts Gerados por IA"];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <header className="w-full max-w-5xl mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <LogoIcon className="h-10 w-10 text-indigo-500" />
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">PostGenius</h1>
        </div>
        <p className="text-lg text-slate-600 dark:text-slate-400">Seu assistente de mídias sociais com IA</p>
      </header>
      
      <main className="w-full max-w-5xl">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Passo {step}: {stepTitles[step-1]}</h2>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
              <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${(step / 3) * 100}%`, transition: 'width 0.5s ease-in-out' }}></div>
            </div>
          </div>
          {renderStep()}
        </div>
      </main>
      <footer className="w-full max-w-5xl mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>Desenvolvido com a API Gemini</p>
      </footer>
    </div>
  );
}


const App: React.FC = () => (
  <BrandKitProvider>
    <AppContent />
  </BrandKitProvider>
);

export default App;
