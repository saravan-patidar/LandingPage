const CtaSection = () => {
  return (
    <div className="bg-[#7f9d5d] w-screen p-5 bg-opacity-75 ">
      <div className="flex justify-center my-9 items-center md:w-[70%] m-auto md:h-[250px] bg-[#fada50]  shadow-md shadow-black p-1">
        <div className="md:w-[49%] md:h-[90%] text-center ">
          <h2 className="text-xl md:text-3xl font-bold md:py-5 text-center p-2 md:mb-5">
            Hungry for Great Food?
          </h2>
          <p>Order Now and Experience Culinary Excellence!</p>
          <button className="text-[#fada50] bg-black p-1 md:p-3 m-4 rounded-xl font-bold border-transparent border shadow-md shadow-black hover:bg-slate-900 hover:text-[#dccb5b]">
            Order Now
          </button>
        </div>
        <img
          className="w-[45%] h-[90%] shadow-2xl rounded-lg hidden md:block  "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ785cpgOoGk3lOJJqQ0pli2K-F3eeyAkU49A&usqp=CAU"
          alt="image-res"
        />
      </div>
    </div>
  );
};

export default CtaSection;
