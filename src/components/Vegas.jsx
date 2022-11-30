import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useERCContract from "../hooks/useERCContract";
import useKingContract from "../hooks/useKingContract";
import Banner from "./Banner";
import Rules from "./Rules";
import SectionTwo from "./SectionTwo";
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

  useEffect(() => {
    fetchGlobalData();
  }, [kingContract, ERCContract, c]);

  // useEffect(() => {
  //   const timer = setInterval(
  //     () => setCurrentTime(Number(Date.now() / 1000)),
  //     1000
  //   );
  //   console.log("timer", timer);
  //   return function cleanUp() {
  //     clearInterval(timer);
  //   };
  // }, []);

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
    setNextround(Number(1669593412));
    round && localStorage.setItem("nextrounddata", Number(1669593412));
    console.log("round", round);
    setTotalAmount(Number(tamount) / 1e18);
    setBidAmount(Number(bidamount) / 1e18);
    setCurrentChampion(champion);
    setlastBidTime(Number(lastbidtime));
    setdelay(Number(delay));
    const etime = Number(lastbidtime) + Number(delay);
    console.log("etime", etime);
    // setendtime(etime)
    localStorage.setItem("gameendstime", 1669725412);
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
    ////console.log("approveAmount", approveAmount, "bidamount", bidamount );
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

  return (
    <div className="vegas-hero">
      <Banner nextround={nextround} isUserApproved={isUserApproved} />
      <SectionTwo currentChampion={currentChampion} />
      <Rules />
    </div>
  );
};

export default Vegas;
