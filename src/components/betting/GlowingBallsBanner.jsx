import glowing13 from "../../assets/Asset 1@1 3.svg";
import glowing12 from "../../assets/Asset 1@1 2.svg";
import glowing11 from "../../assets/Asset 1@1 3.svg";
import glowingBalls from "../../assets/Group 151.svg";
const GlowingBallsBanner = () => {
  return (
    <div>
      <div className="w-[90%] pt-32 flex mx-auto ">
        <div className="w-full max-w-[850px] h-[250px] sm:h-[400px] mx-auto relative">
          <img
            src={glowing13}
            className="absolute w-[40%] left-[-15%] top-[0] lg:left-[-10%] lg:top-[-10%]  mix-blend-screen z-10" alt="glowing-ball"
          />
          <img
            src={glowing11}
            className="w-[100%] max-h-[500px] absolute top-[-20%] mix-blend-screen z-10"  alt="glowing-ball"
          />
          <img
            src={glowing12}
            className="w-[50%] absolute top-0 right-[-20%] lg:top-[-10%] mix-blend-screen z-10"  alt="glowing-ball"
          />
        </div>

        <img
          src={glowingBalls}
          className="absolute left-[50%] translate-x-[-50%]"  alt="glowing-ball"
        />
      </div>
      <div className="mx-auto heading text-white text-center uppercase text-5xl sm:text-7xl">
        <span className="mx-2 treasure-hunt-heading block sm:inline">
          Vegas
        </span>
        Betting
      </div>
    </div>
  );
};
export default GlowingBallsBanner;
