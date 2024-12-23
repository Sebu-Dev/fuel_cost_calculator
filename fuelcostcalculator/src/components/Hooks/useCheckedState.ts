import { useState } from 'react';

export const useCheck = () => {
  const [isChecked, setIsChecked] = useState(false);

  return {
    isChecked,
    setIsChecked
  };
};
