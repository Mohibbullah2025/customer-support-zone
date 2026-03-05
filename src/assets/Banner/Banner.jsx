// import { useState } from "react";

const Banner = () => {
    // const [inprogress, setInprogress] = useState(0)
    // const [resolved, setResolved] = useState(0)
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 mt-20 text-white">
        <div className="flex justify-center items-center flex-col from-[#632EE3] bg-linear-to-r to-[#9F62F2] h-44 w-full rounded-md">
            <h2 className="text-xl mb-4">In-Progress</h2>
            <h1 className="text-xl font-semibold">0</h1>
        </div>
        <div className="flex justify-center items-center flex-col bg-linear-to-r  from-[#54CF68] to-[#00827A] h-44 w-full rounded-md">
            <h2 className="text-xl mb-4">Resolved</h2>
            <h1 className="text-xl font-semibold">0</h1>
        </div>
      
    </div>
  )
};

export default Banner
