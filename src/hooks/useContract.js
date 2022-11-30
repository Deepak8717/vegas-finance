import { useMemo } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

const useContract = (address = undefined, ABI, withSignerIfPossible = true) => {
  const { library } = useWeb3React();

  const { ethereum } = window;

  let _web3;

  if (library) {
    _web3 = new Web3(ethereum);
  } else {
    _web3 = new Web3(
      new Web3.providers.HttpProvider(
        process.env.REACT_APP_CURRENT_WALLETCONNECT_RPC
      )
    );
    // _web3 = new Web3('https://data-seed-prebsc-1-s2.binance.org:8545');
  }

  return useMemo(() => {
    if (!address || !ABI) return null;
    try {
      const contractInstance = new _web3.eth.Contract(ABI, address);
      return contractInstance;
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [library]);
};

export default useContract;
