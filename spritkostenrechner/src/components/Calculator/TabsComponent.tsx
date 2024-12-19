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

export const TabsComponent = ({ tabs, activeTab, setActiveTab }: TabsComponentProps) => (
  <div className="flex justify-center gap-6 mb-6 p-2 rounded-lg shadow-lg flex-wrap max-w-full overflow-hidden">
    {tabs.map((tab: Tab) => (
      <motion.button
        key={tab.id}
        className={`px-6 py-3 text-lg font-semibold transition-all ${
          activeTab === tab.id
            ? 'bg-cyan-600 text-white'
            : 'bg-neutral-700 text-neutral-400 hover:bg-neutral-600 hover:text-white'
        } rounded-md focus:outline-none`}
        onClick={() => setActiveTab(tab.id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300 }}>
        {tab.label}
      </motion.button>
    ))}
  </div>
);
