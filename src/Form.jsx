import { useEffect, useState } from "react";

const Form = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const slideUp = setTimeout(() => {
      setShow(true);
    }, 15000);
    return () => {
      clearTimeout(slideUp);
    };
  }, []);
  const handleSlideDown = () => {
    setShow(false);
  };
  return (
    <div
      className={`fixed w-[90%] scale-90 md:scale-100 md:w-[380px] px-2 py-5 bg-[#808080]  left-5 ${
        show ? "inline-block" : "hidden"
      } animate `}
    >
      <div className="text-center ">
        <button
          onClick={handleSlideDown}
          className="border py-0 px-1 absolute right-1 top-1"
        >
          X
        </button>
        <h3 className="text-lg text-white font-bold pb-1 text-center">
          Stay Updated with Our Latest Offers!
        </h3>
        <h5 className="text-sm">
          Subscribe to Our Newsletter for Exclusive Deals and Discounts.
        </h5>
        <form className="w-5/6 m-auto my-2 ">
          <input
            className=" w-full my-2 p-2 bg-zinc-700 text-white outline-none shadow-md shadow-zinc-400"
            type="text"
            placeholder="Enter Phone Number"
          />
          <input
            className="w-full my-2 p-2 bg-zinc-700 text-white outline-none shadow-md shadow-zinc-400"
            type="email"
            placeholder="Enter Email Address"
          />
          <button className="bg-[#fada50] p-2 font-bold rounded-lg shadow-md shadow-black m-3">
            Subscribe
          </button>
        </form>
        <p className="text-xs p-2">
          Get ready to embark on a culinary journey with us!
        </p>
      </div>
    </div>
  );
};
export default Form;
