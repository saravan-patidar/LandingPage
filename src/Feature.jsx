import { GiChefToque } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";

const Feature = () => {
  return (
    <div className=" md:h-[70vh] bg-[#7f9d5d] w-screen p-5 bg-opacity-75">
      <div>
        <h2 className="text-xl md:text-3xl font-bold py-5 text-center mb-5">
          Why Choose Us?
        </h2>
        <div className="flex justify-center items-center gap-5 md:gap-20 flex-wrap">
          <div className="text-center shadow-lg p-6 rounded-b-2xl border-b-4 border-[#fada50] hover:border-x">
            <GiChefToque className="text-[#fada50] size-16 md:size-24 m-auto hover:scale-[1.05] " />
            <h3 className="text-lg p-2">Expertise & Quality</h3>
            <p className=" w-60 md:w-72">
              Our chefs are culinary experts dedicated to delivering the finest
              quality dishes.
            </p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-b-2xl border-b-4 border-[#fada50] hover:border-x">
            <FaTruckFast className="text-[#fada50] size-16 md:size-24 m-auto hover:scale-[1.05] " />
            <h3 className="text-lg p-2">Fast Service</h3>
            <p className=" w-60 md:w-72">
              We prioritize efficiency to ensure your order is delivered fresh
              and on time.
            </p>
          </div>
          <div className="text-center shadow-lg p-6 rounded-b-2xl border-b-4 border-[#fada50] hover:border-x">
            <BiFoodMenu className="text-[#fada50] size-16 md:size-24 m-auto hover:scale-[1.05] " />
            <h3 className="text-lg p-2">Diverse Menu</h3>
            <p className=" w-60 md:w-72">
              Explore a wide range of cuisines and dishes to satisfy every
              craving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
