import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import "./App.css";
import getWeb3 from "./getweb3";
import Navbar from "./components/Navbar";
import Vegas from "./components/Vegas";
import { useEagerConnect, useInactiveListener } from "./hooks/index";
import useKingContract from "../src/hooks/useKingContract";
import Web3 from "web3";
import secondsToHours from "../src/utils/secondTohours";
function App() {
  const [activatingConnector, setActivatingConnector] = useState();
  const { connector, active, account, chainId } = useWeb3React();

  const triedEager = useEagerConnect();
  const kingContract = useKingContract();

  const SCANLLINK = process.env.REACT_APP_SCAN;

  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useEffect(() => {
    if (active) localStorage.setItem("shouldEggerConnect", "true");
  }, [active]);

  useEffect(() => {
    const assignWeb3 = async () => {
      window.web3 = await getWeb3();
    };
    if (account) {
      assignWeb3();
    }
  }, [account]);

  const onChangeNetworkClick = async () => {
    // Metamask adds Ropsten chain by default, so no need to check wether chain is added or not
    const connectedWallet = localStorage.getItem("connectedWallet");
    if (connectedWallet === "metamask" || connectedWallet === "walletConnect") {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x19" }],
        });
        window.location.reload();
      } catch (error) {
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  rpcUrls: ["https://evm.cronos.org"],
                  chainId: "0x19",
                  nativeCurrency: {
                    name: "Cronos",
                    symbol: "CRO",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://cronoscan.com"],
                  chainName: "Cronos Mainnet",
                },
              ],
            });
            window.location.reload();
          } catch (addError) {
            console.error(addError);
          }
          console.error(error);
        } else {
          // if no window.ethereum then MetaMask is not installed
          //   alert(
          // 	"MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
          //   );
        }
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Vegas />
    </div>
  );
}

export default App;
