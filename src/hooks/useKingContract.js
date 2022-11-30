import useContract from "./useContract";

import KING_GAMEabi from "../contracts/KingGame.json";

const useKingContract = () => {
  return useContract(
    process.env.REACT_APP_KINGGAME_ADDRESS,
    KING_GAMEabi,
    true
  );
};

export default useKingContract;
