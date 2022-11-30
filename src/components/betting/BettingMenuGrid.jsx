
import { FaSearch } from "react-icons/fa";
import Tile from "./Tile";
const BettingMenuGrid = () => {
  const bettingData = [
    {
      dateTime: "MON, DEC 26, 2022 - 08:30 PM ",
      title: "FIFA WORLD CUP 2022",
      team: {
        teamA: "03",
        teamB: "00",
      },

      status: {
        title: "team a won the game",
        subtitle: "Match ended 01:59 M ago",
      },
      completed: true,
    },
    {
      dateTime: "MON, DEC 26, 2022 - 08:30 PM ",
      title: "FIFA WORLD CUP 2022",
      team: {
        teamA: "01",
        teamB: "01",
      },

      status: {
        title: "Live",
        subtitle: "Started 25m ago",
      },
      completed: false,
    },
    {
      dateTime: "MON, DEC 26, 2022 - 08:30 PM ",
      title: "FIFA WORLD CUP 2022",
      team: {
        teamA: "00",
        teamB: "00",
      },

      status: {
        title: "Yet to start the match",
        subtitle: "starting in 01:59",
      },
    },
    {
      dateTime: "MON, DEC 26, 2022 - 08:30 PM ",
      title: "FIFA WORLD CUP 2022",
      team: {
        teamA: "00",
        teamB: "00",
      },

      status: {
        title: "Yet to start the match",
        subtitle: "starting in 01:59",
      },
    },
    {
      dateTime: "MON, DEC 26, 2022 - 08:30 PM ",
      title: "FIFA WORLD CUP 2022",
      team: {
        teamA: "00",
        teamB: "00",
      },

      status: {
        title: "Yet to start the match",
        subtitle: "starting in 01:59",
      },
    },
    {
      dateTime: "MON, DEC 26, 2022 - 08:30 PM ",
      title: "FIFA WORLD CUP 2022",
      team: {
        teamA: "00",
        teamB: "00",
      },

      status: {
        title: "Yet to start the match",
        subtitle: "starting in 01:59",
      },
    },
  ];
  return (
    <div className="text-white">
      <div className="flex flex-wrap my-8 text-white justify-center font-monkstead">
        <button className="btn-betting all">All</button>
        <button className="btn-betting  treasure-hunt-heading">Upcoming</button>
        <button className="btn-betting  treasure-hunt-heading">Live</button>
        <button className="btn-betting  treasure-hunt-heading">Finished</button>
        <button className="btn-betting  treasure-hunt-heading">Canceled</button>
      </div>
      <div className="flex flex-wrap gap-8 justify-around w-[90%] max-w-[1200px] mx-auto">
        <div className="w-full max-w-[700px] relative">
          <label htmlFor="bettingSearchbox"></label>
          <input
            name="bettingSearchbox"
            type="text"
            placeholder="Search By Loren"
            className=" block w-full bg-transparent border-4 border-[#f9e125] rounded-full px-6 py-2 outline-none font-monkstead betting-searchbox"
          />
          <button className="absolute top-4 right-5">
            <FaSearch className="text-2xl text-[#f9e125]" />
          </button>
        </div>
        <div className="w-full sm:w-[30%]">
          <input
            type="date"
            className=" block w-full bg-transparent border-4 border-[#f9e125] rounded-full px-6 py-2 outline-none font-monkstead betting-date-picker-custom"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8  max-w-[1200px] mx-auto my-16">
        {bettingData.map((item, index) => {
          return <Tile key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
export default BettingMenuGrid;
