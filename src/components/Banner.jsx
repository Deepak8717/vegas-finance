import Lightwaves from "../assets/Light-waves.svg";
import coin from "../assets/coin.svg";
import "animate.css";
import { useWeb3React } from "@web3-react/core";
import useKingContract from "../hooks/useKingContract";
import useERCContract from "../hooks/useERCContract";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
const Banner = ({
  nextround,
  isUserApproved,
  approve,
  bid,
  totalAmount,
  lastBidTime,
  delay,
  account,
  claim,
  bidAmount,
  userBalance,
  currentTime,
}) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 pt-8">
      <div className="w-[90%] max-w-[400px] mx-auto treasure-hunt my-4">
        <img src={Lightwaves} className="light-waves" alt="coin" />
        <img src={coin} className="floating" alt="coin" />
        <img src={coin} className="floating" alt="coin" />
        <img src={coin} className="floating" alt="coin" />
      </div>
      <div className="w-[90%] max-w-[400px] mx-auto md:mt-16 text-center md:text-left ">
        <h1 className="heading animate__animated animate__backInDown animate__delay-2s">
          <span className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold treasure-hunt-heading block md:inline">
            treasure
          </span>
          <span className="uppercase text-3xl md:text-4xl lg:text-5xl font-bold text-white  md:mx-4">
            hunt
          </span>
        </h1>

        <p className="text-white my-2 sm:my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry . Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a ga centuries,
        </p>
        <button className="explore-btn animate__animated animate__flash">
          Explore
        </button>
      </div>
      <div className=" mx-auto flex flex-col justify-center">
        <div className="treasure-hunt-countdown p-4 flex justify-center items-center rounded-2xl">
          <div>
            <div className="text-center"></div>
            {currentTime < nextround || nextround === 0 ? (
              <div>
                <div className="text-center">Next round</div>

                <Countdown
                  date={localStorage.getItem("nextrounddata") * 1000}
                  className="text-3xl font-bold"
                />
              </div>
            ) : (
              <>
                {lastBidTime != 0 && currentTime - lastBidTime >= delay ? (
                  <div className="text-center font-bold text-2xl">
                    Game finished
                  </div>
                ) : (
                  <div className="text-center font-bold text-2xl">
                    <div>Game Live</div>

                    {totalAmount == 0 ? (
                      <p>Waiting for bids.</p>
                    ) : (
                      <>
                        {currentTime < localStorage.getItem("gameendstime") && (
                          <>
                            <span className="mx-2">Ends in</span>
                            <Countdown
                              date={localStorage.getItem("gameendstime") * 1000}
                              className="text-2xl font-bold"
                            />
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="prepare-for-battle text-3xl uppercase font-bold text-center my-2">
          Prepare for battle !
        </div>
      </div>
      <div className="w-[90%] max-w-[400px] mx-auto text-center md:text-left">
        <span className="uppercase text-[30px] font-bold text-white">
          Bid now
        </span>

        <p className="text-white my-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry . Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a ga centuries,
        </p>
        {currentTime > nextround && account ? (
          <div>
            {isUserApproved ? (
              <>
                {lastBidTime !== 0 && currentTime - lastBidTime >= delay ? (
                  <button
                    className="explore-btn btn-wolfies capitalize"
                    onClick={() => {
                      claim();
                    }}
                  >
                    Claim
                  </button>
                ) : (
                  <button
                    className="explore-btn btn-wolfies capitalize"
                    onClick={() => {
                      bid();
                    }}
                  >
                    {bidAmount} $wolfies
                  </button>
                )}
              </>
            ) : (
              <button
                className="explore-btn btn-wolfies capitalize"
                onClick={() => {
                  approve();
                }}
              >
                Approve
              </button>
            )}
          </div>
        ) : (
          <></>
        )}
        {/* {account && (
          <p className="mt-2  text-[16px] leading-[24.66px] font-bold black">
            Your Balance {userBalance} $CANDY
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Banner;
