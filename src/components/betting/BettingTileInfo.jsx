import Navbar from "../Navbar";
import logoTile from "../../assets/logo-tile.svg";
const BettingTileInfo = () => {
  return (
    <div className="base-color h-[100vh] uppercase text-[#4C210B]">
      <Navbar />
      <div className="betting-overlay">
        <div className="pool-banner w-[98%] max-w-[900px] h-[150px] mx-auto my-32">
          <div className="w-[98%] mx-auto h-[150px] flex justify-evenly items-center ">
            <div className="h-[70%] w-[30%]">
              <img src={logoTile} className="mx-auto" alt="vegas logo" />
            </div>
            <div className="w-[50%] h-[70%] p-2 text-center font-bold">
              <div className="flex">
                <div className="w-[40%] flex flex-col justify-center">
                  <div>Pool</div>
                  <div className="text-2xl font-bold m-2">00</div>
                </div>
                <div className="w-[20%] flex items-center justify-center  text-3xl">
                  -
                </div>
                <div className="w-[40%] flex flex-col justify-center">
                  <div>Vegas pool</div>
                  <div className="text-2xl font-bold m-2">00</div>
                </div>
              </div>
            </div>
            <div className="h-[70%] w-[30%]">
              <img src={logoTile} className="mx-auto" alt="vegas logo" />
            </div>
          </div>
          <div className="px-4 w-[70%] mx-auto my-2  flex flex-col sm:flex-row font-bold">
            <button className="w-[100%] h-[60px] mx-auto sm:mx-2 my-2 p-4 flex  justify-around items-center btn-bet">
              <span>Pool</span>
              <span>250.00 $</span>
            </button>
            <button className="w-[100%] h-[60px] mx-auto sm:mx-2 my-2 p-4 mx flex justify-around items-center btn-bet">
              <span>Vegas pool</span>
              <span>450.00 $</span>
            </button>
          </div>
          <div className="pool-banner w-[95%] max-w-[1000px] h-[100px] items-center mx-auto my-8 sm:my-16 flex justify-center flex-wrap text-center ">
            <div className="mx-2">
              <div>Last bid</div>
              <div className="text-[#250C05] font-bold">#45678983003756</div>
            </div>
            <div className="mx-2">
              <div>Last bid amount</div>
              <div className="text-[#250C05] font-bold">450.00$</div>
            </div>
            <div className="mx-2">
              <div>Size of POT</div>
              <div className="text-[#250C05] font-bold">560000</div>
            </div>
            <div className="mx-2">
              <div className="">Current Multiplier</div>
              <div className="text-[#250C05] font-bold">6x</div>
            </div>
            <div className="mx-2">
              <div>Fee</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingTileInfo;
