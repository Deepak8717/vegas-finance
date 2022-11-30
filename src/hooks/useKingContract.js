import useContract from "./useContract";

import KING_GAMEabi from "../contracts/KingGame.json"

const useKingContract = () =>
  {
   //console.log("process.env.REACT_APP_MINTER_ADDRESS",process.env.REACT_APP_MINTER_ADDRESS);
   return useContract(process.env.REACT_APP_KINGGAME_ADDRESS, KING_GAMEabi, true); 
  }

export default useKingContract;
