
export const NotebookPaper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[18.5%] md:top-[18%] lg:top-[16%] left-[25%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[18.5%] md:top-[18%] lg:top-[16%] left-[50%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[18.5%] md:top-[18%] lg:top-[16%] left-[75%] md:w-[50px] w-[25px] h-auto z-20"
      />

      <div
        className="relative z-10 top-[20%]  left-1/2 transform -translate-x-1/2 
        w-[325px] sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
        bg-[#fffef9] rounded-t-3xl shadow-xl border border-[#e0dccc] overflow-visible"
      >
        <div className="relative paper-lines mt-[84px] px-4 pb-8 pt-4">
          {children}
        </div>
      </div>
    </>
  );
};

