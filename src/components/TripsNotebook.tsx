import { motion, AnimatePresence } from "framer-motion";

export const TripsNotebook = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => {
  return (
    <>
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[18.5%] md:top-[18%] lg:top-[16%] left-[27%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[18.5%] md:top-[18%] lg:top-[16%] left-[47%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[18.5%] md:top-[18%] lg:top-[16%] left-[67%] md:w-[50px] w-[25px] h-auto z-20"
      />

        <motion.div
          key={color}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1}}
          exit={{ opacity: 1 }}
          className="relative z-10 top-[20%] left-1/2 transform -translate-x-1/2 
      w-[260px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
      rounded-tl-3xl rounded-bl-3xl shadow-xl border-[1.5px] overflow-visible min-h-[500px] items-center"
          style={{
            backgroundColor: `${color}A6`,
            borderColor: color,
          }}
        >
          <div className="relative mt-[64px] md:px-4 pb-8 pt-4">
            <AnimatePresence mode="wait">{children}</AnimatePresence>
          </div>
        </motion.div>
    </>
  );
};
