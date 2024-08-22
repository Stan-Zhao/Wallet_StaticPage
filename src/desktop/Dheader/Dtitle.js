import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import Slider from "react-slick";
import "@/phone/secTitle/SliderStyles.css"; // 导入自定义的 CSS 样式

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

gsap.registerPlugin(ScrollTrigger);
// 旋转动画
function Dtitle() {
  const cup = useRef(null);

  useEffect(() => {
    // 使用 GSAP 创建旋转动画
    gsap.to(cup.current, {
      rotation: 40, // 旋转到 +20 度
      duration: 2, // 动画持续时间
      repeat: -1, // 无限重复
      yoyo: true, // 向前和向后动画
      ease: "power1.inOut", // 动画缓动
    });
  }, [cup.current]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 4000,
    // autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
  };
  // 图片滑动动画
  const secRefimg = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const textH = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [cup.current, secRefimg.current],
      { scale: 0.5, opacity: 0, transformOrigin: "center center" },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,

        scrollTrigger: {
          trigger: secRefimg.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play pause resume reset",
        },
      }
    );

    // 文字滑动动画
    gsap.fromTo(
      text1.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      text2.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: text2.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      text3.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: text3.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );
    gsap.fromTo(
      textH.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: textH.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-[rgb(0,3,65)] to-[rgb(0,2,22)] w-full h-[1080px]">
      <div className="px-[69.5px] pt-20 ">
        <div className="text-white pt-40 text-7xl text-left font-bold ">
          {/* 行1 */}
          <div ref={text1}>
            <span className="text-[#6a5cfa]">Welcome </span>
            <span> to </span>
            <span className="text-[#3887f8]"> Dodo, </span>
          </div>
          {/* 行2 */}
          <div ref={text2}>
            <span>Your home for crypto</span>
          </div>
          {/* 行3 */}
          <div ref={text3}>
            <span className="text-[#6a5cfa]">index funds</span>
          </div>
        </div>
        {/* 行with */}
        <div
          ref={textH}
          className="text-white text-left pt-14  w-[580px] leading-loose font-medium tracking-wider"
        >
          With Dodo, you can seize every market opportunity, diversify your
          portfolio, and achieve wealth appreciation while mitigating risks.
        </div>
        <div className="pt-[110px]">
          <button className="w-[320px] h-[70px] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)] rounded-3xl font-bold text-white text-3xl">
            Explore Products
          </button>
        </div>
        {/* 图像1 */}
        <div className="relative h-3 z-10 ">
          <div ref={secRefimg} className="absolute right-0 -bottom-10 z-0">
            <img src="/dodobird.png" className="w-[533px] mx-auto" />
            <img
              src="/cup.png"
              ref={cup}
              className="absolute w-[160px] -rotate-45 bottom-[130px] right-[400px]"
            />
          </div>
        </div>
        <div className="pt-[180px] w-full  mx-auto">
          <div className=" mx-auto mt-10 text-white rounded-lg p-4 w-full">
            <Slider {...settings}>
              {cryptoData.map((item) => (
                <div key={item.key} className="p-4 rounded-md">
                  <div className="flex justify-center text-center items-center">
                    <div className="font-lg text-lg px-2">{item.name}</div>
                    <div className="px-1 text-gray-300">{"$" + item.cost}</div>
                    <div
                      className={`px-2 ${
                        item.change.includes("-")
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {item.change}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dtitle;
