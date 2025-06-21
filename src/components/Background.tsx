import Grass from "../assets/grass.png";
import Windmill from "../assets/windmill.png";
import Cloud from "../assets/cloud 3.png";
import TopLeftCloud from "../assets/cloud 1.png";
import RightLeftCloud from "../assets/cloud 2.png";
import Cloud2 from "../assets/cloud 4.png";
import TopCloud from "../assets/cloud 5.png";
import Rocket from "../assets/rocket.png"

export const Background = () => {
  return (
    <div className="relative w-full min-w-[375px] min-h-[500px] h-screen overflow-hidden">

        <img
            src={TopLeftCloud}
            alt="Top Left Cloud"
            className="absolute top-[0%] left-[0%] lg:w-[20%] w-[40%] max-w-[500px] pointer-events-none select-none"
        />


         <img
            src={RightLeftCloud}
            alt="Top Left Cloud"
            className="absolute top-[0%] right-[0%] lg:w-[20%] w-[40%] max-w-[500px] pointer-events-none select-none"
        />

        <img
            src={Rocket}
            alt="Rocket"
            className="absolute top-[8%] md:-right-[8%] lg:-right-[5%] -right-[8%] lg:w-[20%] w-[35%] max-w-[500px] pointer-events-none select-none"
        />

        <img
            src={Cloud}
            alt="Cloud Above Windmill"
            className="absolute left-[0%] bottom-[50%] w-[20%] sm:w-[16%] md:w-[12%] max-w-[100px] pointer-events-none select-none"
        />

        <img
            src={Cloud2}
            alt="Cloud Right Side"
            className="absolute right-[0%] bottom-[40%] w-[20%] sm:w-[16%] md:w-[12%] max-w-[100px] pointer-events-none select-none"
        />

        <img
            src={TopCloud}
            alt="Cloud Right Side"
            className="absolute right-[30%] top-[0%] w-[30%] md:w-[35%] max-w-[350px] pointer-events-none select-none"
        />

      <div className="absolute bottom-0 left-0 w-full">
        <img
          src={Grass}
          alt="Grass"
          className="w-full h-auto object-cover"
        />

        <img
        src={Windmill}
        alt="Windmill"
        className="absolute bottom-[60%] w-[12%] min-w-[50px] max-w-[100px]"
        />
      </div>
    </div>
  );
};
