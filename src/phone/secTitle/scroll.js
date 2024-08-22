import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderStyles.css"; // 导入自定义的 CSS 样式

const cryptoData = [
  { key: 1, name: "BTC", cost: 58035, change: "-4.79%" },
  { key: 2, name: "ETH", cost: 4150, change: "-3.21%" },
  { key: 3, name: "USDT", cost: 1.0, change: "+0.01%" },
  { key: 4, name: "BNB", cost: 620, change: "-2.50%" },
  { key: 5, name: "SOL", cost: 195, change: "+1.85%" },
  { key: 6, name: "XRP", cost: 1.08, change: "-1.32%" },
  { key: 7, name: "DOGE", cost: 0.25, change: "-2.95%" },
  { key: 8, name: "AVAX", cost: 92, change: "+4.12%" },
  { key: 9, name: "UNI", cost: 24, change: "+3.60%" },
  { key: 10, name: "BCH", cost: 590, change: "-3.10%" },
];

function CryptoTicker() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="max-w-sm mx-auto mt-10 text-white rounded-lg p-4">
      <Slider {...settings}>
        {cryptoData.map((item) => (
          <div key={item.key} className=" p-4 rounded-md">
            <div className="flex justify-center text-center">
              <div className="font-bold text-lg">{item.name}</div>
              <div className="pl-4 text-gray-300">{"$" + item.cost}</div>
              <div
                className={`pl-4 ${
                  item.change.includes("-") ? "text-red-500" : "text-green-500"
                }`}
              >
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CryptoTicker;
