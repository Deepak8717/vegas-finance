import useContract from "./useContract";

import ERCabi from "../contracts/ERC20.json"

const useERCContract = () =>
  {
   return useContract(process.env.REACT_APP_TOKEN_ADDRESS, ERCabi, true); 
  }

export default useERCContract;
