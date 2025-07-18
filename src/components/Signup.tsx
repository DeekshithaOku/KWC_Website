export const SignUp = () => {
  return (
     <div className="w-full h-full pt-3 md:pt-6 flex justify-center items-center rounded-lg px-4">
      <div className="w-full max-w-[800px] w-[150px] h-[400px] md:w-[800px] md:h-[400px]">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America%2FNew_York"
          className="w-full h-full rounded-lg shadow-md"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};