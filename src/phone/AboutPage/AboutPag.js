function Aboutpag() {
  return (
    <div className="bg-[rgb(0,2,16)] w-full h-[570px] text-white text-center ">
      <div className="h-[430px] mx-3 my-16 px-4 pt-5 rounded-lg bg-gradient-to-b from-[rgb(22,3,80)] to-[rgb(60,22,164)] relative">
        <div className="text-left pl-5">
          <div className="text-3xl font-bold">
            <span className="text-[#3887f8]">About </span>Dodo
          </div>
          <div className="pt-2 text-xl font-semibold">
            yoour <span className="text-[#6b5ffe]">home </span>for crypto
            <span className="text-[#3887f8]">index </span>funds
          </div>
          <div className="pt-6 font-medium text-gray-200 text-lg">
            Here, we'll take you on an exciting journey into the word of digital
            currencies, allowing you to effortlessly invest in a variety of
            crypto index funds tailored to diferent themes and types.
          </div>
          <div className="font-medium text-gray-200 pt-3 text-lg">
            With Dodo, you can seize every market opportunity, diversify your
            portfolio, and achieve wealth appreciation while mitigating risks.
          </div>
        </div>
        <div className="absolute -pt-15">
          <img className="w-[200px] " src="/AboutImg.png" alt="About Image" />
        </div>
        <div
          className=" mt-20 flex justify-end px-20
        "
        >
          <button className=" h-10 px-4 border-2 border-white rounded-xl text-xl">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
export default Aboutpag;
