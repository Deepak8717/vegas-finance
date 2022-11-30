import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const getWeb3 = async () => {
  let web3;
  const connectedWallet = localStorage.getItem("connectedWallet");
  console.log("connectedwaller",connectedWallet);

  if (connectedWallet === "walletConnect") {
    const {CURRENT_CHAINID, CURRENT_WALLETCONNECT_RPC }  = process.env 
    const ChainIDinString = parseInt(CURRENT_CHAINID);

    const provider = new WalletConnectProvider({
      rpc: {
        [ChainIDinString]: CURRENT_WALLETCONNECT_RPC,
      },
    });
    await provider.enable();
    web3 = new Web3(provider);
    web3.pollingInterval = 4500000;
  } else if (connectedWallet === "metamask") {
    const { ethereum } = window;
    let provider = ethereum;
    if (ethereum.providers) {
      provider = ethereum.providers.find(({ isMetaMask }) => isMetaMask);
    }
    await provider.enable();
    web3 = new Web3(provider);
  } else {
  }
  return web3;
};
export default getWeb3;