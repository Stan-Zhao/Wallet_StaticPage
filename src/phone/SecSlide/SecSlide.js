import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { id: 1, title: "electron", src: "/logo192.png" },
  { id: 2, title: "react", src: "/logo192.png" },
  { id: 3, title: "nodejs", src: "/logo192.png" },
  { id: 4, title: "angular", src: "/logo192.png" },
  { id: 5, title: "vue", src: "/logo192.png" },
  { id: 6, title: "svelte", src: "/logo192.png" },
];

function SecSlide() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    dotsclass: "slick-dots",
  };
  return (
    <div className="bg-[rgb(0,2,16)] w-full h-[950px] ">
      <div className="bg-[rgb(0,8,36)] rounded-xl p-8 mx-4 border border-blue-700 h-[400px] text-white text-center">
        <div className="text-4xl font-bold">Support Wallet</div>
        <div className="text-xl pt-5 text-[rgb(151,151,151)]">
          We support all Ethereum wallets
        </div>
        {/* //滑块组件一 */}
        <Slider {...settings} rows={2}>
          {items.map((item) => (
            <div key={item.id}>
              <div className=" grid grid-cols-3 gap-10 pt-[20px]">
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-[60px]" src="/logo192.png"></img>
                  </div>
                  <div className="pt-3 font-bold">{item.title}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-[60px]" src="/logo192.png"></img>
                  </div>
                  <div className="pt-3 font-bold">{item.title}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div>
                    <img className="w-[60px]" src="/logo192.png"></img>
                  </div>
                  <div className="pt-3 font-bold">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* //Partner滑块组件二 */}
      <div className="pt-10 text-center text-white">
        <div className="text-3xl font-bold">Partners</div>
        <div className="text-xl pt-5 text-[rgb(151,151,151)]">
          Our investors backing DeFi evolution
        </div>
        <Slider {...settings} rows={1} slidesPerRow={3}>
          {items.map((item) => (
            <div key={item.id} className="flex justify-around pt-8">
              <div className="flex flex-col items-center">
                <div>
                  <img className="w-[60px]" src="/logo192.png"></img>
                </div>
                <div className="pt-3 font-bold">{item.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* ///末尾图标 */}
      <div className="bg-m-explore flex flex-col justify-around mt-10 items-center h-[250px] py-4">
        <div className="">
          <img className="w-[150px]" src="/dodologo.png" />
        </div>
        <div className="text-white text-3xl text-center font-bold">
          your <span className="text-[#6c5dff]">home</span> for crypto
          <span className="text-[#3887f9]">index</span> funds
        </div>
        <div className=" text-white py-2 px-4 rounded">
          <button className=" h-10 border-2 border-white rounded-3xl text-lg w-[200px]">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
export default SecSlide;
