import React from 'react';
import Bus from "../../assets/bus9.png";
const Detail = () => {
    return (
        <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch]">
           <div className='w=full grid grid-ols-2 gap-16 items-center'>
            <div className="col-span-1 space-y-8">
                <img src={Bus} alt='detail img' className="w-full-aspect-[3/2] aspect rounded-md object-contain" />
            </div>
            
           </div>
        </div>
    );
};

export default Detail;
