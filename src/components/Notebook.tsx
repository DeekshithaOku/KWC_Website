
export const NotebookPaper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* Binder Rings */}
      <img
        src="/binder.png"
        alt="Binder Ring"
        className="absolute top-[18%] md:top-[17%] lg:top-[15%] left-[25%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/binder.png"
        alt="Binder Ring"
        className="absolute top-[18%] md:top-[17%] lg:top-[15%] left-[50%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/binder.png"
        alt="Binder Ring"
        className="absolute top-[18%] md:top-[17%] lg:top-[15%] left-[75%] md:w-[50px] w-[25px] h-auto z-20"
      />

      {/* White overlays to hide binder ring backs */}
      <div className="absolute top-[20.1%] left-[25.1%] w-[13px] md:w-[25px] h-[6%] bg-[#fffef9] z-30" />
      <div className="absolute top-[20.1%] left-[50.1%] w-[13px] md:w-[25px] h-[6%] bg-[#fffef9] z-30" />
      <div className="absolute top-[20.1%] left-[75.1%] w-[13px] md:w-[25px] h-[6%] bg-[#fffef9] z-30" />

      {/* Notebook Page */}
      <div
        className="relative z-10 top-[20%] left-1/2 transform -translate-x-1/2 
        w-[275px] sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
        bg-[#fffef9] rounded-t-3xl shadow-xl border border-[#e0dccc] overflow-visible"
      >
        <div className="relative paper-lines mt-[64px] px-4 pb-8 pt-4">
          {children}
        </div>
      </div>
    </>
  );
};

