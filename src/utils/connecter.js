import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const POLLING_INTERVAL = 15000;
export const injected = new InjectedConnector({
  // supportedChainIds: [1, 4, 56, 97],
});

const { REACT_APP_CURRENT_CHAINID, REACT_APP_CURRENT_WALLETCONNECT_RPC } =
  process.env;

const ChainIDinString = parseInt(REACT_APP_CURRENT_CHAINID);

export const walletconnect = new WalletConnectConnector({
  rpc: {
    [ChainIDinString]: REACT_APP_CURRENT_WALLETCONNECT_RPC,
  },
  qrcode: true,
  chainId: ChainIDinString,
  pollingInterval: POLLING_INTERVAL,
  bridge: "https://bridge.walletconnect.org",
  // supportedChainIds: [ChainIDinString],
});
