import { motion } from 'framer-motion';

type Tab = {
  id: string;
  label: string;
};

type TabsComponentProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
};

export const TabsComponent = ({ tabs, activeTab, setActiveTab }: TabsComponentProps) => {
  const buttonClasses = (isActive: boolean) =>
    `px-6 py-3 text-lg font-semibold transition-all rounded-md focus:outline-none ${
      isActive
        ? 'bg-cyan-600 text-white'
        : 'bg-neutral-700 text-neutral-400 hover:bg-neutral-600 hover:text-white'
    }`;

  return (
    <div className="flex justify-center gap-6 mb-6 p-2 rounded-lg shadow-lg flex-wrap max-w-full overflow-hidden">
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          className={buttonClasses(activeTab === tab.id)}
          onClick={() => setActiveTab(tab.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}>
          {tab.label}
        </motion.button>
      ))}
    </div>
  );
};
