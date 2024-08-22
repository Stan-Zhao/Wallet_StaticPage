import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Dproduct() {
  const secRefour = useRef(null);
  const secReftop = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      secRefour.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: secRefour.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      secReftop.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: secRefour.current,
          start: "top 50%",
          toggleActions: "play none none reset",
          // markers: {
          //   startColor: "white", // 标记开始位置的颜色
          //   endColor: "white", // 标记结束位置的颜色
          //   fontSize: "18px", // 标记文本的字体大小
          //   fontWeight: "bold", // 标记文本的字体粗细
          //   indent: 20, // 标记文本的缩进距离
          // }, // 动画触发和回滚的行为
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-[rgb(0,3,80)] via-[rgb(0,2,22)] to-[rgb(0,3,87)] w-full h-[1080px] text-white text-center">
        {/* Our */}
        <div
          ref={secRefour}
          className=" pt-[80px] font-bold text-5xl leading-relaxed"
        >
          <span>Our product is to </span>
          <span className="text-[#6c5dff]"> simplify </span>
          <span> access to </span>
          <span className="text-[#3887f9]"> risks </span>
          <span className="">
            and
            <br />
          </span>
          <span className="text-[#3887f9]"> returns </span>
          <span> in dodo </span>
        </div>
        {/* Top */}
        <div ref={secReftop} className="top  text-xl pt-8">
          Top Gainers
        </div>

        <div className="pt-[70px]">
          <button className="inline-block mx-auto w-[320px] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] text-3xl font-bold rounded-3xl text-white h-[70px] hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)]">
            All Products
          </button>
        </div>
      </div>
    </div>
  );
}
export default Dproduct;
