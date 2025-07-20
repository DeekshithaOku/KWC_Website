export const NotebookPaper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative z-10 top-[20%] left-1/2 transform -translate-x-1/2 
      w-[325px] sm:w-[450px] md:w-[600px] lg:w-[800px] xl:w-[1000px]
      bg-[#fffef9] rounded-t-3xl shadow-xl border border-[#e0dccc] overflow-visible"
    >
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[-14px] md:top-[-28px] left-[25%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[-14px] md:top-[-28px] left-[50%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <img
        src="/src/assets/binder.png"
        alt="Binder Ring"
        className="absolute top-[-14px] md:top-[-28px] left-[75%] md:w-[50px] w-[25px] h-auto z-20"
      />
      <div className="relative paper-lines mt-[64px] px-4 pb-8 pt-4">
        {children}
      </div>
    </div>
  );
};
