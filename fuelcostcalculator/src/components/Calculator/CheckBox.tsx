import { useCheck } from '../Hooks/useCheckedState';

export const Checkbox = () => {
  const { isChecked, setIsChecked } = useCheck();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center space-x-3 mb-2">
      <label className="flex items-center cursor-pointer ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="hidden"
        />
        <div
          className={`w-6 h-6 border-2 rounded-md flex items-center justify-center transition-colors duration-300 ${
            isChecked ? 'bg-blue-500 border-blue-500 text-white' : 'bg-white border-gray-300'
          }`}>
          {isChecked && (
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
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
        <span className="ml-2  text-neutral-300">Hin- und Rückweg berechnen</span>
      </label>
    </div>
  );
};

export default Checkbox;
