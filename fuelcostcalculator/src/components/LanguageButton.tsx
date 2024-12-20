import { motion } from 'framer-motion';
import { GrLanguage } from 'react-icons/gr';
import { useLanguage } from '../context/LanguageContext';

const LanguageButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center cursor-pointer"
      onClick={toggleLanguage}>
      <motion.a className="relative flex items-center justify-center lg:h-12 lg:w-12 rounded-full bg-black text-white shadow-lg">
        <GrLanguage />
      </motion.a>
      <span className="mt-2 text-sm text-neutral-400">{language.toUpperCase()}</span>
    </motion.div>
  );
};

export default LanguageButton;
