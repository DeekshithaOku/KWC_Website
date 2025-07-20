import { useState } from 'react';
import { motion } from 'framer-motion';

interface SlideData {
  id: string;
  title: string;
  slideUrl: string;
}

const springLessons: SlideData[] = [
  { id: 'spring-1', title: 'Spring Flowers & Growth', slideUrl: 'https://docs.google.com/presentation/d/1ABC123/edit' },
  { id: 'spring-2', title: 'Weather Patterns', slideUrl: 'https://docs.google.com/presentation/d/1DEF456/edit' },
  { id: 'spring-3', title: 'Baby Animals', slideUrl: 'https://docs.google.com/presentation/d/1GHI789/edit' },
  { id: 'spring-4', title: 'Garden Planning', slideUrl: 'https://docs.google.com/presentation/d/1JKL012/edit' },
  { id: 'spring-5', title: 'Rain Cycle', slideUrl: 'https://docs.google.com/presentation/d/1MNO345/edit' },
  { id: 'spring-6', title: 'Spring Activities', slideUrl: 'https://docs.google.com/presentation/d/1PQR678/edit' },
];

const fallLessons: SlideData[] = [
  { id: 'fall-1', title: 'Autumn Leaves', slideUrl: 'https://docs.google.com/presentation/d/1STU901/edit' },
  { id: 'fall-2', title: 'Harvest Time', slideUrl: 'https://docs.google.com/presentation/d/1VWX234/edit' },
  { id: 'fall-3', title: 'Migration Patterns', slideUrl: 'https://docs.google.com/presentation/d/1YZA567/edit' },
  { id: 'fall-4', title: 'Weather Changes', slideUrl: 'https://docs.google.com/presentation/d/1BCD890/edit' },
  { id: 'fall-5', title: 'Thanksgiving Science', slideUrl: 'https://docs.google.com/presentation/d/1EFG123/edit' },
  { id: 'fall-6', title: 'Preparing for Winter', slideUrl: 'https://docs.google.com/presentation/d/1HIJ456/edit' },
];

export const SeasonalGrid = () => {
  const [activeTab, setActiveTab] = useState<'spring' | 'fall'>('spring');
  const [cardsVisible, setCardsVisible] = useState(true);

  const currentLessons = activeTab === 'spring' ? springLessons : fallLessons;

  const handleSlideClick = (slideUrl: string) => {
    window.open(slideUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTabChange = (tab: 'spring' | 'fall') => {
    setCardsVisible(false);
    setActiveTab(tab); 

    setTimeout(() => {
      setCardsVisible(true); 
    }, 700); 
  };

  return (
    <div className="max-w-5xl mx-auto w-full mt-24">
      {/* Tabs */}
      <div className="flex relative">
        <motion.button
          onClick={() => handleTabChange('spring')}
          className={`
            px-12 py-4 font-medium text-lg rounded-t-[18px] transition-all duration-300 relative z-20
            border border-black text-black font-[Pangolin]
            ${activeTab === 'spring'
              ? 'bg-white border-b-transparent'
              : 'bg-[#f5f5f5] border-b-black'}
          `}
        >
          Spring
        </motion.button>

        <motion.button
          onClick={() => handleTabChange('fall')}
          className={`
            px-12 py-4 font-medium text-lg rounded-t-[18px] transition-all duration-300 relative z-20
            border border-black border-l-0 text-black font-[Pangolin]
            ${activeTab === 'fall'
              ? 'bg-white border-b-transparent'
              : 'bg-[#f5f5f5] border-b-black'}
          `}
        >
          Fall
        </motion.button>

        <div className="flex-1 border-b border-black z-10" />
      </div>

      <motion.div
        layout
        className="bg-white border border-black rounded-b-lg border-t-0 p-6 z-10"
        transition={{
          layout: {
            type: 'tween',
            duration: 0.7,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {currentLessons.map((lesson, index) => (
            <motion.div
              key={lesson.id + activeTab}
              layout
              initial={false}
              animate={{
                opacity: cardsVisible ? 1 : 0,
                y: cardsVisible ? 0 : 50,
              }}
              transition={{
                delay: cardsVisible ? 0.1 + index * 0.05 : 0,
                duration: 0.45,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSlideClick(lesson.slideUrl)}
              className="cursor-pointer"
            >
              <div
                className={`h-46 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg
                  ${activeTab === 'spring'
                    ? 'bg-blue-100 hover:bg-blue-200'
                    : 'bg-orange-100 hover:bg-orange-200'}
                `}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
