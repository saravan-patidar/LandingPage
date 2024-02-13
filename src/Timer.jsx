import { useEffect, useState } from "react";

const Timer = () => {
  const [countDown, setCountDown] = useState({ minutes: 10, seconds: 0 });

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCountDown((prevCountDown) => {
        let updateSeconds = prevCountDown.seconds - 1;
        let updateMinutes = prevCountDown.minutes;

        if (updateSeconds < 0) {
          updateSeconds = 59;
          updateMinutes -= 1;
        }

        if (updateMinutes === 0 && updateSeconds === 0) {
          clearInterval(countInterval);
        }
        return { minutes: updateMinutes, seconds: updateSeconds };
      });
    }, 1000);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <div className="bg-[#B2AC88] w-screen p-2 md:p-10">
      <div className=" w-full md:w-2/3 m-auto  text-center">
        <h2 className="font-bold text-xl md:text-3xl md:p-4">
          Limited Time offers on orders
        </h2>
        <div className=" m-2 md:m-4 ">
          <span className="border-2 border-black rounded-md p-1 text-[50px] md:text-[80px] shadow-md shadow-black">
            {countDown.minutes < 10
              ? "0" + countDown.minutes
              : countDown.minutes}
          </span>
          <span className="p-1 text-[50px] md:text-[80px] ">:</span>
          <span className="border-2 border-black p-1 text-[50px] md:text-[80px] rounded-md shadow-md shadow-black">
            {countDown.seconds < 10
              ? "0" + countDown.seconds
              : countDown.seconds}
          </span>
        </div>
        <p className="text-lg text-[#fada50]">Hurry Up!</p>
      </div>
    </div>
  );
};

export default Timer;
