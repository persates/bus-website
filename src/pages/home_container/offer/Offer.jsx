import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import Save from "../../../assets/save.png";

const Offer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("GTECH08")
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-medium mb-6">Special Offer</h1>
        <Link to="/offer" className="text-violet-600">
          View all
        </Link>
      </div>

      {/* GRID START */}
      <div className="grid grid-cols-2 gap-16">

        {/* CARD 1 */}
        <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-8 flex items-center gap-x-3 shadow-md">
          <img src={Save} alt="save img" className="w-52 aspect-[2/3] object-contain object-center" />
          <div className="flex flex-1 flex-col space-y-5">
            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Get 40% off on your first booking
            </h1>
            <div className="flex items-center gap-x-5">
              <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md">
                {copied ? (
                  <span className="text-green-600">Copied</span>
                ) : (
                  <span className="text-violet-600">GTECH08</span>
                )}
              </div>
              <button onClick={handleCopy} className="text-xl text-violet-600">
                <FaCopy />
              </button>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
              Valid till: <span className="text-sm font-medium">26th June</span>
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-8 flex items-center gap-x-3 shadow-md">
          <img src={Save} alt="save img" className="w-52 aspect-[2/3] object-contain object-center" />
          <div className="flex flex-1 flex-col space-y-5">
            <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
              Get 40% off on your first booking
            </h1>
            <div className="flex items-center gap-x-5">
              <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md">
                {copied ? (
                  <span className="text-green-600">Copied</span>
                ) : (
                  <span className="text-violet-600">GTECH08</span>
                )}
              </div>
              <button onClick={handleCopy} className="text-xl text-violet-600">
                <FaCopy />
              </button>
            </div>
            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
              Valid till: <span className="text-sm font-medium">26th June</span>
            </p>
          </div>
        </div>

      </div>
      {/* GRID END */}
      
    </div>
  );
};

export default Offer;
