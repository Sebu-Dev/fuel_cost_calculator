import { useLanguage } from '../../context/LanguageContext';

interface CarpoolProps {
  carpooling: boolean | false;
  setCarpooling: (value: boolean | false) => void;
}

export const Carpool = ({ carpooling, setCarpooling }: CarpoolProps) => {
  const { translations } = useLanguage();

  const handleCarpoolingChange = () => {
    setCarpooling(!carpooling);
  };
  return (
    <div className="flex items-center mt-4">
      <label htmlFor="carpool" className="flex items-center cursor-pointer">
        <div
          className={`w-6 h-6 border-2 border-neutral-300 rounded-sm flex items-center justify-center
            ${carpooling ? 'bg-cyan-500' : 'bg-neutral-300'} transition-colors`}>
          {carpooling && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-800 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        <span className="ml-2 text-neutral-300 ">
          {translations.FUELCOSTCALCULATOR.CARPOOL_FORMATION}
        </span>
      </label>
      <input
        type="checkbox"
        id="carpool"
        checked={carpooling}
        onChange={handleCarpoolingChange}
        className="hidden"
      />
    </div>
  );
};

export default Carpool;
