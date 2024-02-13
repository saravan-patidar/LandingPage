const Founder = () => {
  return (
    <div className="flex justify-center items-center md:h-[70vh] bg-[#B2AC88] w-screen flex-wrap gap-2">
      <div className="w-screen md:w-[30%] h-[75%]">
        <img
          className="w-[60%] my-2 md:my-0 md:w-[90%] m-auto md:h-full rounded-xl shadow-xl hover:scale-[1.006]"
          src="https://img.freepik.com/premium-photo/cartoon-chef-with-large-knife-his-hand_786255-1390.jpg"
          alt="f-img"
        />
      </div>
      <div className="w-[80%] md:w-[30%] md:h-[75%] py-4 px-8 rounded-xl shadow border-x-[#fada50] border hover:scale-[1.006] mb-3 md:mb-0">
        <h2 className="font-bold text-xl md:text-3xl py-2 text-center">
          About Our Founder
        </h2>
        <h3 className="text-lg md:text-2xl font-bold m-2 text-black">
          Chef Alex Rodriguez
        </h3>
        <p className="md:w-96 md:m-2 md:text-lg text-sm">
          Meet Chef Alex Rodriguez, the culinary mastermind behind our app. With
          years of experience in the culinary industry, Chef Alex brings a
          passion for creating unforgettable dining experiences.
        </p>
      </div>
    </div>
  );
};
export default Founder;
