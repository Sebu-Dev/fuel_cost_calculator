import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CarPool } from './components/Calculator/CarPool';
import FuelCostCalculator from './components/Calculator/FuelCostCalculator';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { LanguageProvider } from './context/LanguageContext';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LanguageProvider>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="flex flex-col min-h-screen container mx-auto px-8">
          <Navbar />
          <FuelCostCalculator />
          <div className="">
            <Contact />
          </div>
        </div>
      </div>
    </LanguageProvider>
  </BrowserRouter>
);
export default CarPool;
