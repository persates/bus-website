import React, { useState } from "react";

const DepartureTime = () => {
  const [departureTime, setDepartureTime] = useState("");

  const handleDepartureChange = (e) => {
    setDepartureTime(e.target.value);
  };

  return (
    <div className="w-full space-y-5">
      {!departureTime ? (
        <div className="w-full">
          <label htmlFor="departureTime" className="block mb-2 font-semibold">
            Departure Time
          </label>
          <select
            name="departureTime"
            id="departureTime"
            value={departureTime}
            onChange={handleDepartureChange}
            className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
          >
            <option value="">Select a Time</option>
            <option value="04:00 AM">04:00 AM</option>
            <option value="06:00 AM">06:00 AM</option>
            <option value="08:00 AM">08:00 AM</option>
          </select>
        </div>
      ) : (
        <div className="space-y-5">
          <h2 className="text-xl font-medium text-neutral-800 dark:text-neutral-100">
            Selected Departure Time
          </h2>
          <div className="w-full flex items-center gap-x-3">
            <div className="w-fit text-base font-semibold">
              Bus departs at:{" "}
              <span className="ml-1.5 font-medium">{departureTime}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartureTime;
