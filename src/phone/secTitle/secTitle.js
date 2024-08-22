import CryptoTicker from "./scroll";

function SecTitle() {
  return (
    <div className="bg-gradient-to-br from-[rgb(0,3,65)] to-[rgb(0,2,22)] w-full h-[940px]">
      <div className="text-white pt-32 text-4xl text-center font-bold">
        <div>
          <span className="text-[#6a5cfa]">Welcome </span>
          <span> to </span>
          <span className="text-[#3887f8]"> Dodo, </span>
        </div>
        <div>
          <span>your home for crypto</span>
        </div>
        <div>
          <span className="text-[#6a5cfa]">index funds</span>
        </div>
      </div>
      <div className="text-white text-center pt-5 px-[50px] font-semibold">
        With Dodo, you can seize every market opportunity, diversify your
        portfolio, and achieve wealth appreciation while mitigating risks.
      </div>
      <div className="px-auto pt-10">
        <img src="/bird.png" className="w-[330px] mx-auto" />
      </div>
      <div className="text-center my-10">
        <button className="inline-block px-[25%] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] text-lg font-bold rounded-lg text-white h-12 hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)]">
          Explore Products
        </button>
      </div>
      <CryptoTicker />
    </div>
  );
}

export default SecTitle;
