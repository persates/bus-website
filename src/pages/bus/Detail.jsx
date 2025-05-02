import React from "react";
import { Link } from "react-router-dom";
import Bus from "../../assets/bus9.png";
import { FaStar } from "react-icons/fa";
import Destination from "../../components/destination/Destination";
import DepartTime from "../../components/deperttime/DepertTime"; 
import Seat from "../../components/seat/Seat";


const Detail = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Sol Taraf */}
        <div className="space-y-8">
          <img
            src={Bus}
            alt="detail img"
            className="w-full aspect-[3/2] rounded-md object-contain"
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Luxury Bus
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                (Bus Number Plate)
              </span>
            </h1>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                (4.5)
              </p>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur...
            </p>
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="space-y-10">
          <div className="space-y-6">
            <Destination />
            <DepartTime /> {/* <-- burada düzeltildi */}
          </div>

          <Seat />





          <div className="flex">
            <Link
              to="/bus/bus-details/checkout"
              className="inline-block bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
