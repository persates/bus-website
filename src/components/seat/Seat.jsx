import React, { useState } from "react";
import { MdOutlineChairAlt } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
// Tekli koltuk bileşeni
const Seat = ({ seatNumber, isSelected, onClick }) => {
  return (
    <MdOutlineChairAlt
      className={`text-3xl -rotate-90 cursor-pointer ${
        isSelected ? "text-violet-600" : "text-neutral-600"
      }`}
      onClick={onClick}
    />
  );
};

const BusSeatLayout = () => {
  const totalSeats = 41;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatNumber)
        ? prevSelected.filter((s) => s !== seatNumber)
        : prevSelected.length < 10
        ? [...prevSelected, seatNumber]
        : (alert("You can only select a maximum of 10 seats."), prevSelected)
    );
  };

  // Koltukları bir kez oluşturuyoruz
  const seats = Array.from({ length: totalSeats }, (_, i) => (
    <Seat
      key={i + 1}
      seatNumber={i + 1}
      isSelected={selectedSeats.includes(i + 1)}
      onClick={() => handleSeatClick(i + 1)}
    />
  ));

  return (
    <div className="space-y-5">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
        Choose a Seat
      </h2>

      <div className="flex w-full justify-between">
        <div className="flex-1 w-full flex">
          <div className="flex-1 w-full flex gap-x-5 items-stretch">
            {/* Direksiyon */}
            <div className="w-10 h-full border-r-2 border-dashed border-neutral-300 dark:border-neutral-800">
              <GiSteeringWheel className="text-3xl mt-6 text-violet-600 -rotate-90" />
            </div>

            {/* Koltuklar */}
            <div className="flex flex-col items-center">
              <div className="flex-1 space-y-4">
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {seats.slice(0, 10)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {seats.slice(10, 20)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {/* Boşluk bırakmak için dummy div */}
                  <div className="col-span-9"></div>
                  {seats[20]}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {seats.slice(21, 31)}
                </div>
                <div className="w-full grid grid-cols-10 gap-x-3">
                  {seats.slice(31, 41)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 w-28">
         
          <div className="flex items-center gap-x-2">
            <MdOutlineChairAlt className="text-lg  text-neutral-500 -rotate-90" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Available
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlineChairAlt className="text-lg  text-red-500 -rotate-90" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Booked
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <MdOutlineChairAlt className="text-lg  text-violet-500 -rotate-90" />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                Selected
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <RiMoneyDollarBoxFill  className="text-lg  text-neutral-500 " />
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                 $20
            </p>
          </div>
        </div>
      </div>



{/* Selected Seat*/}
{
  selectedSeats.length > 0 && 
  <div className="!mt-10">
    <h3 className="text-lg font-bold">Selected Seats:</h3>
    <div className="flex flex-wrap">
      {selectedSeats.map(seat => (
        <div
          key={seat}
          className="w-10 h-10 rounded-md m-1.5 text-lg font-medium bg-violet-600/30 flex items-center justify-center"
        >
          {seat}
        </div>
      ))}
    </div>
  </div>
}

{/* Claculate Price*/}
{
    selectedSeats.length > 0 && 
  <div className="!mt-5 flex item-center gap-x-4">
    <h3 className="text-lg font-bold">Total Fair Prices:</h3>
<p className="text-lg font-medium">
     ${selectedSeats.length * 20} 
</p>
<span className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
    (Including all of the taxes)
</span>
    </div>
}




    </div>
  );
};

export default BusSeatLayout;
