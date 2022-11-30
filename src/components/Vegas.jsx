import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import Web3 from "web3";
import useERCContract from "../hooks/useERCContract";
import useKingContract from "../hooks/useKingContract";
import Banner from "./Banner";
import Rules from "./Rules";
import SectionTwo from "./SectionTwo";
import secondsToHours from "../utils/secondTohours";
import { useRef } from "react";
const Vegas = () => {
  const { connector, account, activate, error, active, chainId, deactivate } =
    useWeb3React();

  const kingContract = useKingContract();
  const ERCContract = useERCContract();

  const [nextround, setNextround] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [bidAmount, setBidAmount] = useState(0);
  const [currentChampion, setCurrentChampion] = useState("");
  const [lastBidTime, setlastBidTime] = useState(0);
  const [userBalance, setuserBalance] = useState(0);
  const [nextroundAmount, sewtnextroundAmount] = useState(0);
  const [isUserApproved, setisUserApproved] = useState(false);
  const [c, setC] = useState(0);
  const [winnerDecied, setwinnerDecied] = useState(false);
  const [delay, setdelay] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetchGlobalData();
  }, [kingContract, ERCContract, c]);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTime(Number(Date.now() / 1000)),
      1000
    );
    return function cleanUp() {
      clearInterval(timer);
    };
  }, []);
  const fetchGlobalData = async () => {
    const req1 = kingContract.methods.nextStartTime().call();
    const req2 = kingContract.methods.totalBid().call();
    const req3 = kingContract.methods.bidAmount().call();
    const req4 = kingContract.methods.lastBidder().call();
    const req5 = kingContract.methods.lastBidTime().call();
    const req6 = kingContract.methods.endDelay().call();
    const req7 = kingContract.methods.hasWinner().call();
    const req8 = ERCContract.methods
      .balanceOf(process.env.REACT_APP_KINGGAME_ADDRESS)
      .call();

    const [
      round,
      tamount,
      bidamount,
      champion,
      lastbidtime,
      delay,
      iswinnerdecided,
      nextroundamnt,
    ] = await Promise.all([req1, req2, req3, req4, req5, req6, req7, req8]);

    const now = Date.now() / 1000;
    setNextround(Number(round));
    round && localStorage.setItem("nextrounddata", Number(round));
    setTotalAmount(Number(tamount) / 1e18);
    setBidAmount(Number(bidamount) / 1e18);
    setCurrentChampion(champion);
    setlastBidTime(Number(lastbidtime));
    setdelay(Number(delay));
    const etime = Number(lastbidtime) + Number(delay);
    // setendtime(etime)
    localStorage.setItem("gameendstime", etime);
    setwinnerDecied(iswinnerdecided);
    sewtnextroundAmount(Number(nextroundamnt) / 1e18);
  };

  const fetchData = async () => {
    const usrbal = await ERCContract.methods.balanceOf(account).call();
    setuserBalance(Number(usrbal) / 1e18);
    const bidamount = await kingContract.methods.bidAmount().call();
    const approveAmount = await ERCContract.methods
      .allowance(account, process.env.REACT_APP_KINGGAME_ADDRESS)
      .call();
    if (Number(approveAmount) > Number(bidamount)) {
      setisUserApproved(true);
    } else {
      setisUserApproved(false);
    }
  };

  useEffect(() => {
    if (account) {
      fetchData();
    }
  }, [account]);

  const approve = async () => {
    try {
      await ERCContract.methods
        .approve(
          process.env.REACT_APP_KINGGAME_ADDRESS,
          "100000000000000000000000000000000"
        )
        .send({
          from: account,
        });
      alert("Tx Succes");
      setisUserApproved(true);
      fetchData();
    } catch (e) {
      alert("Tx Fail");
    }
  };
  const bid = async () => {
    try {
      await kingContract.methods.participate().send({
        from: account,
      });
      alert("Tx Succes");
      fetchGlobalData();
      fetchData();
      setCounter(counter + 1);
      // window.location.reload();
    } catch (e) {
      alert("Tx Fail");
    }
  };
  const claim = async () => {
    try {
      await kingContract.methods.claimReward().send({
        from: account,
      });
      alert("Tx Succes");
      fetchGlobalData();
      fetchData();
      // window.location.reload();
      // setC((prev) => {c = prev + 1})
    } catch (e) {
      alert("Tx Fail");
      ////console.log("error", e);
    }
  };
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      let _web3 = new Web3(
        new Web3.providers.HttpProvider(
          process.env.REACT_APP_CURRENT_WALLETCONNECT_RPC
        )
      );
      let currentBlock = await _web3.eth.getBlockNumber();

      let allEvents = [];

      kingContract
        .getPastEvents(
          "OnBid",
          {
            filter: {}, // Using an array means OR: e.g. 20 or 23
            fromBlock: currentBlock - 1900,
            toBlock: "latest",
          },
          function (error, events) {
            events?.map((eventobj) => {
              // let blockData = _web3.eth.getBlock(eventobj.blockNumber);
              let time = secondsToHours(
                Date.now() / 1000 - eventobj.returnValues[2]
              );
              const amnt = Number(eventobj.returnValues[1]) / 1e18;

              let obj = {
                action: eventobj.event,
                account: eventobj.returnValues[0],
                amount: amnt,
                time: time,
                txnId: eventobj.transactionHash,
              };
              allEvents.push(obj);
            });
          }
        )
        .then(function (events) {
          // same results as the optional callback above
          setData2(allEvents.reverse());
        });
    };

    fetchEvents();
  }, [counter]);
  return (
    <div className="vegas-hero">
      <Banner
        nextround={nextround}
        isUserApproved={isUserApproved}
        approve={approve}
        bid={bid}
        totalAmount={totalAmount}
        lastBidTime={lastBidTime}
        delay={delay}
        account={account}
        claim={claim}
        bidAmount={bidAmount}
        userBalance={userBalance}
        currentTime={currentTime}
      />
      <SectionTwo currentChampion={currentChampion} data={data2} />
      <Rules />
    </div>
  );
};

export default Vegas;
