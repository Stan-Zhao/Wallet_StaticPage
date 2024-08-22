function Dheader() {
  return (
    <div
      className="fixed top-0 left-0 right-0 backdrop-blur-lg w-full border-b border-gray-800 z-50
    "
    >
      <div className=" flex justify-between px-[69.5px] py-5 backdrop-blur-md items-center text-2xl text-white ">
        <div className="">
          <img src="/dodologo.png" alt="logo" className="w-[120px] " />
        </div>
        <div>
          <div className="flex gap-[90px] items-center">
            <span className="hover:text-[rgb(100,100,245)]">Home</span>
            <span className="hover:text-[rgb(100,100,245)]">Products</span>
            <span className="pr-5 hover:text-[rgb(100,100,245)]">About</span>
            <button className="w-[130px] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)] rounded-xl h-12 font-bold">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dheader;
