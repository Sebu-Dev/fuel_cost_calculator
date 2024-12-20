import { useState } from 'react';

export const useTabs = (initialTab: string) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return {
    activeTab,
    setActiveTab
  };
};
