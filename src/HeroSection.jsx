const HeroSection = () => {
  return (
    <div className=" w-screen  md:h-screen ">
      <div className="bg-img h-60  md:h-screen"></div>
      <div className="coverImage  flex justify-center items-center md:w-[70%] md:h-[70%] m-auto md:top-1/2 relative md:-translate-y-1/2  rounded-3xl flex-wrap ">
        <div className="w-screen md:w-[45%] md:h-full p-4 text-center text-black bg-opacity-70 md:bg-opacity-85 bg-[#a9d666] rounded-s-3xl ">
          <h1 className="font-bold w-48 md:w-auto m-auto md:text-[38px] mt-16">
            Savor Every Bite with Our Delectable Dishes!
          </h1>
          <button className="bg-red-500 border-[#fada50] border p-2 rounded-lg mt-4 md:mt-10 text-black font-semibold text-lg hover:bg-red-600 hover:border-2 scale-75 md:scale-100">
            Explore Our Menu
          </button>
        </div>
        <img
          className="hidden md:inline-block md:w-[55%] h-full rounded-e-3xl "
          src="https://media.istockphoto.com/id/168340083/photo/choosemyplate-healthy-food-and-plate-of-usda-balanced-diet-recommendation.jpg?s=612x612&w=0&k=20&c=S5OYuPg-n1fuOOgReQf9xPuFgA1i-UO54Uj2u1RD7iU="
          alt="img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
