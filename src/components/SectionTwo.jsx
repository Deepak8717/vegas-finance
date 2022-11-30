import Events from "./Events";

const SectionTwo = ({ currentChampion }) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pt-8 text-white mt-16">
      <div className="w-[80%] max-w-[400px] mx-auto text-center">
        <h1 className="uppercase text-xl font-bold">Current champion</h1>
        <div className="champion-image"></div>
        <div>{currentChampion}</div>
      </div>
      <div>
        <div className="champion-image"></div>
      </div>
      <Events />
    </div>
  );
};

export default SectionTwo;
