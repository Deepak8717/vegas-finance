import Navbar from "../Navbar";
import BettingMenuGrid from "./BettingMenuGrid";
import GlowingBallsBanner from "./GlowingBallsBanner";

const Betting = () => {
  return (
    <div className="base-color w-full overflow-hidden tracking-wider">
      <Navbar />
      <div className="betting-overlay">
        <GlowingBallsBanner />
        <BettingMenuGrid />
      </div>
    </div>
  );
};

export default Betting;
