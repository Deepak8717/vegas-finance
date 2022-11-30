import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "../utils/connecter";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  const { connector, account, activate, chainId, deactivate } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = useState();
  const onboarding = useRef();
  const [toggleNav, setToggleNav] = useState(false);
  const [walletPopUp, setWalletPopUp] = useState(false);
  const [logOutPopup, setLogOutPop] = useState(false);
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  const handleWalletToggle = () => {
    setWalletPopUp(!walletPopUp);
  };
  const handleLogoutPop = () => {
    setLogOutPop(!logOutPopup);
  };
  const logout = () => {
    if (connector === walletconnect) {
      connector.close();
    } else if (connector === injected) {
      deactivate();
      localStorage.setItem("shouldEggerConnect", "false");
      // history.push("/");
    }
  };
  //function for connect to wallet metamask
  const onConnectToMetamaskFunc = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      setActivatingConnector(injected);
      activate(injected, undefined, true)
        .then(() => console.log("Connected Successfully"))

        .catch(() => console.log("Something went worng"));
      localStorage.setItem("connectedWallet", "metamask");
    } else {
      onboarding.current.startOnboarding();
    }
  };
  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account && account.length > 0) {
        onboarding.current.stopOnboarding();
      }
    }
  }, [account]);

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector, chainId]);

  const onConnectWithWalletConnect = () => {
    setActivatingConnector(walletconnect);
    activate(walletconnect, undefined, true).catch((err) => {
      setActivatingConnector();
      walletconnect.walletConnect1Provider = undefined;
      localStorage.removeItem("connectedWallet");
      if (err) {
        window.location.reload(false);
      }
    });
    localStorage.setItem("connectedWallet", "walletConnect");
  };

  return (
    <div className="flex justify-center w-full h-24 p-8 bg-transparent navbar">
      <div className="w-[30%] text-center hidden lg:block">
        <ul className="flex">
          <Link to="/" className="mx-2">
            <li>home</li>
          </Link>
          <Link to="/betting" className="mx-2">
            <li>about</li>
          </Link>
          <Link to="#" className="mx-2">
            <li>overview</li>
          </Link>
          <Link to="#" className="mx-2">
            <li>community</li>
          </Link>
        </ul>
      </div>
      <div className="w-[100%] lg:w-[30%] text-center relative">
        <div className="logo lg:left-[35%] xl:left-[20%]"></div>
      </div>
      <div className="w-[30%] text-center hidden lg:flex">
        <ul className="flex">
          <Link to="#" className="mx-2">
            <li>exchange</li>
          </Link>
          <Link to="#" className="mx-2">
            <li>staking</li>
          </Link>
          <Link to="#" className="mx-2">
            <li>casino</li>
          </Link>
          <Link to="#" className="mx-2">
            <li>docs</li>
          </Link>
        </ul>
      </div>
      <div className="xl:w-[5%] lg:w-[15%] text-center hidden lg:flex justify-end xl:justify-center">
        {account ? (
          <FaRegUser
            className="border w-10 h-10 rounded-[50%] p-2"
            onClick={handleLogoutPop}
          />
        ) : (
          <button
            className="wallet-popup w-full max-w-[100px] flex justify-center items-center text-black font-bold rounded-full p-2"
            onClick={handleWalletToggle}
          >
            Wallet
          </button>
        )}
      </div>
      {walletPopUp && (
        <div className="fixed top-0 left-0 bottom-0 right-0 walletpop-overlay z-[150] flex justify-center">
          <div className="w-[90%] relative max-w-[900px] h-[500px]  my-48 bg-white text-black">
            <button
              className="absolute right-5 top-4 font-bold"
              onClick={handleWalletToggle}
            >
              X
            </button>
            <div className="flex flex-col items-center justify-center h-[400px]">
              <h1 className="capitalize font-bold text-2xl m-4">
                service providers
              </h1>
              <div className="flex flex-col sm:flex-row w-[60%] h-48 sm:w-full max-w-[500px] justify-between items-center">
                <div
                  className="metamask-icon"
                  onClick={() => {
                    onConnectToMetamaskFunc();
                    handleWalletToggle();
                  }}
                ></div>
                <div
                  className="wallet-connet"
                  onClick={() => onConnectWithWalletConnect()}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {logOutPopup && (
        <div className="fixed top-0 left-0 bottom-0 right-0 walletpop-overlay z-[150] flex justify-center">
          <div className="w-[90%] relative max-w-[300px] h-[300px]  my-48 bg-white text-black rounded-lg">
            <button
              className="absolute right-5 top-4 font-bold "
              onClick={handleLogoutPop}
            >
              X
            </button>
            <div className="flex flex-col items-center justify-center h-[300px] lowercase">
              <button
                className="wallet-popup w-full max-w-[100px] flex justify-center items-center text-black font-bold rounded-full p-2 my-2"
                onClick={() => {
                  logout();
                  handleLogoutPop();
                }}
              >
                Logout
              </button>
              <div className="w-[90%] break-all text-center">{account}</div>
              <Link className="text-blue-500">view on scan</Link>
            </div>
          </div>
        </div>
      )}

      <GiHamburgerMenu
        className="w-8 h-8 sm:w-10 sm:h-10 lg:hidden"
        onClick={handleToggle}
      />
      {toggleNav && (
        <div className="toggle-menu-dropdown">
          <ul className="flex flex-col items-end">
            <Link to="#" className="my-1 hover">
              <li>home</li>
            </Link>
            <Link to="#" className="my-1">
              <li>about</li>
            </Link>
            <Link to="#" className="my-1">
              <li>overview</li>
            </Link>
            <Link to="#" className="my-1">
              <li>community</li>
            </Link>
            <Link to="#" className="my-1">
              <li>exchange</li>
            </Link>
            <Link to="#" className="my-1">
              <li>staking</li>
            </Link>
            <Link to="#" className="my-1">
              <li>casino</li>
            </Link>
            <Link to="#" className="my-1">
              <li>docs</li>
            </Link>
          </ul>
          <div className="flex justify-end my-4">
            <button
              className="wallet-popup w-full max-w-[100px] flex justify-center items-center text-black font-bold rounded-full p-2"
              onClick={handleWalletToggle}
            >
              Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
