/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect,  } from "react";

import { useWeb3React } from "@web3-react/core";

import { injected } from "../utils/connecter";

// import SALE_ABI from "../Config/SALE_ABI.json";
// import TOKEN_ABI from "../Config/TOKEN_ABI.json";

// import { MAIN_TOKEN, SALE, BUYTOKEN } from "../Config";

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);
  const connectedWallet = localStorage.getItem("connectedWallet");

  useEffect(() => {
    if (connectedWallet === "metamask")
      injected.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
          activate(injected, undefined, true).catch(() => {
            setTried(true);
          });
        } else {
          setTried(true);
        }
      });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};

export const useInactiveListener = (suppress = false) => {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    const shouldEggerConnect = localStorage.getItem("shouldEggerConnect");
    if (
      ethereum &&
      ethereum.on &&
      !active &&
      !error &&
      !suppress &&
      shouldEggerConnect === "true"
    ) {
      const handleChainChanged = () => {
        activate(injected, undefined, true).catch((error) => {
          console.error("Failed to activate after chain changed", error);
        });
      };
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          activate(injected, undefined, true).catch((error) => {
            console.error("Failed to activate after accounts changed", error);
          });
        }
      };

      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    }
    return undefined;
  }, [active, error, suppress, activate]);
};