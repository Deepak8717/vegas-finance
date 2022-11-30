import { Link } from "react-router-dom";
import logoTile from "../../assets/logo-tile.svg";
const Tile = ({ item }) => {
  return (
    <Link to="/betting-tile-info">
      <div className="w-full max-w-[550px] mx-auto font-monkstead text-[#4C210B] tracking-wider uppercase">
        <div className="h-[290px] relative right-[-4%]">
          <div className="flex ">
            <div className="z-10 w-[50%] h-[150px] text-center betting-tile-date p-4 rounded-[30px]">
              <h1 className="uppercase">{item.dateTime}</h1>
            </div>
            <div className="z-100 w-[50%] relative right-[6%] text-center rounded-[30px] betting-tile-title p-4">
              <h1 className="uppercase">{item.title}</h1>
            </div>
          </div>
          <div className="w-[94%] h-[150px] relative top-[-15%] z-30 betting-tile-rectangle-bottom">
            <div
              className={`w-full h-[150px] relative top-[-25%] betting-tile-team-score ${
                item.completed && "betting-completed-overlay"
              }`}
            >
              <div className="w-full h-[150px] betting-team-score justify-center items-center absolute top-0 left-0 bottom-0 right-0 betting-tile-team-score-overlay">
                <div className="h-[70%]">
                  <img src={logoTile} className="mx-auto" alt="vegas logo" />
                </div>
                <div className="h-[70%]p-2 text-center">
                  <div className="flex ">
                    <div className="w-[40%] ">
                      <div>team a</div>
                      <div className="text-2xl font-bold m-2">
                        {item.team.teamA}
                      </div>
                    </div>
                    <div className="w-[20%] flex items-center justify-center  text-3xl">
                      -
                    </div>
                    <div className="w-[40%] ">
                      <div>team b</div>
                      <div className="text-2xl font-bold m-2">
                        {item.team.teamB}
                      </div>
                    </div>
                  </div>
                  <div>{item.status.subtitle}</div>
                </div>
                <div className=" h-[70%]">
                  <img src={logoTile} className="mx-auto" alt="vegas logo" />
                </div>
              </div>
            </div>
            <div className="absolute flex  justify-center whitespace-nowrap  left-[50%] translate-x-[-50%] bottom-[7px]">
              {item.status.title}
            </div>
          </div>
        </div>
        <div className="px-4 flex flex-col sm:flex-row">
          <button className="w-[80%] mx-auto sm:mx-2 my-2 p-4 flex  justify-around items-center btn-bet">
            <span> Bet on team A</span>
            <span>250.00 $</span>
          </button>
          <button className="w-[80%] mx-auto sm:mx-2 my-2 p-4 mx flex justify-center items-center btn-bet">
            Bet on team B
          </button>
        </div>
      </div>
    </Link>
  );
};
export default Tile;
