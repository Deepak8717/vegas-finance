import { useState } from "react";

const Events = () => {
  const [data, setData] = useState([
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
    {
      action: "Bit",
      account: "0x269...545",
      amount: 1,
      time: "03.43",
      txnId: "0x269...545",
    },
  ]);
  return (
    <div className="w-[90%] max-w-[700px] md:max-w-full mx-auto md:col-span-2">
      <div className="p-2 sm:p-4 md:p-8 rounded-xl events">
        <div className="rounded-3xl">
          <div className=" flex  justify-center  lg:items-start">
            <div className="text-center">
              <h1 className="md:text-[40px] text-2xl md:leading-[51.04px]  text-black font-medium">
                Events
              </h1>
            </div>
          </div>
          <div className=" mt-5">
            <div className="grid grid-cols-5 gap-4  border overflow-x-auto  gap-5 overflow-auto bg-zinc-100 text-gray-800 md:rounded-2xl  mx-1 rounded-lg px-2 md:px-5 lg:px-12 xl:px-12 py-2 md:py-3  ">
              <div className="">
                <h1 className="font-semibold  text-[10px] md:text-xs lg:text-lg ">
                  Action
                </h1>
              </div>

              <div className="">
                <h1 className="   font-semibold  text-[10px] md:text-xs lg:text-lg ">
                  Account
                </h1>
              </div>

              <div className="">
                <h1 className="   font-semibold  text-[10px] md:text-xs lg:text-lg ">
                  Amount
                </h1>
              </div>

              <div className="">
                <h1 className="   font-semibold  text-[10px] md:text-xs lg:text-lg ">
                  Time
                </h1>
              </div>
              <div className="">
                <h1 className="   font-semibold  text-[10px] md:text-xs lg:text-lg ">
                  Tx hash
                </h1>
              </div>
            </div>
            <br />

            <div className=" overflow-y-auto   overflow-x-auto  h-52  ">
              {data.map((item) => {
                return (
                  <>
                    <div className="= flex justify-between  items-center overflow-y-auto  lg:px-16 md:px-5 mx-2  gap-5 md:mt-2 py-2 ">
                      <h1 className="mt-2 text-[10px] md:text-xs lg:text-lg">
                        {" "}
                        {item.action}{" "}
                      </h1>

                      <h1 className=" mt-2 text-[10px] md:text-xs lg:text-lg hover:underline hover:text-blue-400 flex items-center cursor-pointer">
                        {" "}
                        <a
                          className="flex items-center"
                          target="/blank"
                          href={``}
                        >
                          <span>{item.account.slice(0, 10)}...</span>{" "}
                          <span></span>
                        </a>
                      </h1>

                      <h1 className="mt-2 text-[10px] md:text-xs  lg:text-lg">
                        {item.amount}
                      </h1>

                      <h1 className="mt-2 text-[10px] md:text-xs lg:text-lg">
                        {item.time} ago
                      </h1>

                      <h1 className=" mt-2 text-[10px] md:text-xs lg:text-lg hover:underline hover:text-blue-400 flex items-center cursor-pointer">
                        {" "}
                        <a className="flex items-center" target="/blank">
                          <span>{item.txnId.slice(0, 10)}...</span>{" "}
                          <span></span>
                        </a>
                      </h1>
                    </div>
                  </>
                );
              })}
            </div>

            {/* <div className="= flex justify-evenly">
            <h1 className="mt-2">Bid</h1>

            <h1 className=" mt-2 hover:underline hover:text-blue-400 flex items-center cursor-pointer">
              {" "}
              <span>0x269...545...</span>{" "}
              <a target="/blank" href="/blank">
                <span>
                  <BiLinkExternal />{" "}
                </span>
              </a>
            </h1>

            <h1 className="mt-2">$20</h1>

            <h1 className="mt-2">03:00</h1>

            <h1 className=" mt-2 hover:underline hover:text-blue-400 flex items-center cursor-pointer">
              {" "}
              <span>0xxx...xxx...</span>{" "}
              <a target="/blank" href="/blank">
                <span>
                  <BiLinkExternal />{" "}
                </span>
              </a>
            </h1>
          </div> */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
