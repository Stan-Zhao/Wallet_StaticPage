import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const partner = [
  { id: 1, title: "MetaMask", src: "/Dpartner1.png" },
  { id: 2, title: "Uniswap", src: "/Dpartner2.png" },
  { id: 3, title: "1inch", src: "/Dpartner3.png" },
  { id: 4, title: "PancakeSwap", src: "/Dpartner1.png" },
  { id: 5, title: "SushiSwap", src: "/Dpartner2.png" },
];

const wallet = [
  { id: 1, title: "MetaMask", src: "/Dwallet1.svg" },
  { id: 2, title: "Coinbase", src: "/Dwallet2.svg" },
  { id: 3, title: "Guarda", src: "/Dwallet3.svg" },
  { id: 4, title: "imToken", src: "/Dwallet1.svg" },
  { id: 5, title: "Electrum", src: "/Dwallet2.svg" },
  { id: 6, title: "Ledger", src: "/logo192.png" },
  { id: 7, title: "Atomic", src: "/Dwallet1.svg" },
  { id: 8, title: "Trezor", src: "/Dwallet2.svg" },
  { id: 9, title: "Exodus", src: "/Dwallet3.svg" },
  { id: 10, title: "Trust", src: "/logo192.png" },
];

const Dpartner = () => {
  const gridRef = useRef(null);
  const flexRef = useRef(null);
  const texttop1 = useRef(null);
  const texttop2 = useRef(null);
  const textbot1 = useRef(null);
  const textbot2 = useRef(null);

  useEffect(() => {
    // 获取所有网格项的 DOM 元素
    const gridItems = gridRef.current.children;
    const flexItems = flexRef.current.children;
    // 5个图标出现动画
    Array.from(flexItems).forEach((item, index) => {
      const img = item.querySelector("img");

      gsap.fromTo(
        img,
        {
          scale: 0.5,
          opacity: 0,
          rotate: 360,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          marker: true,
          rotate: 0,
          delay: index * 0.13,

          scrollTrigger: {
            trigger: textbot2.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play pause resume reset",
            // markers: {
            //   startColor: "white",
            //   endColor: "white",
            //   fontSize: "18px",
            //   fontWeight: "bold",
            //   indent: 20,
            // },
          },
        }
      );
    });
    // 文字一出现动画
    gsap.fromTo(
      texttop1.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: texttop1.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );
    // 文字二出现动画
    gsap.fromTo(
      texttop2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: texttop1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );
    // 文字3出现动画
    gsap.fromTo(
      textbot1.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textbot1.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );
    // 文字4出现动画
    gsap.fromTo(
      textbot2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        scrollTrigger: {
          trigger: textbot1.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );

    // GSAP 动画，使用 stagger 让方块交错动画
    gsap.to(gridItems, {
      scale: 0.75,
      y: 30,
      repeat: -1,
      duration: 1.5,
      ease: "power1.inOut",
      stagger: {
        repeat: -1,
        yoyo: true,
        each: 0.2, // 整体动画持续时间
        grid: [2, 5], // 网格排列，2行5列
        from: "end", // 动画从中心向外开始
        axis: "x", // 波浪沿 x 轴传播
        ease: "power1.inOut", // 使用更自然的正弦缓动效果
      },
    });
  }, []);

  return (
    <div className="bg-gradient-to-b  from-[rgb(20,26,59)] via-[rgb(14,19,40)] to-[rgb(12,18,30)] w-full h-[860px] px-[69.5px] mx-auto">
      <div className=" text-white text-center">
        <div ref={texttop1} className="text-[42px] font-bold">
          Support Wallet
        </div>
        <div ref={texttop2} className="text-xl pt-3 text-[rgb(151,151,151)]">
          We support all Ethereum wallets
        </div>
        {/* //滑块组件一 */}
        <div
          ref={gridRef}
          className="grid grid-cols-5  gap-x-16 gap-y-20 mt-20 justify-items-start content-start items-start"
        >
          {/* 渲染9个网格项 */}
          {wallet.map((i) => (
            <div className="flex flex-row items-center" key={i.id}>
              <div>
                <img className="w-[60px]" src={i.src}></img>
              </div>
              <div className="pl-5 text-2xl text-gray-400">{i.title}</div>
            </div>
          ))}
        </div>
      </div>
      {/* //Partner滑块组件二 */}
      <div className="pt-[130px] text-center text-white">
        <div
          ref={textbot1}
          className="text-3xl font-bold text-[42px] text-center"
        >
          Partner with us
        </div>
        <div
          ref={textbot2}
          className="text-xl pt-8 text-[rgb(151,151,151)] text-center"
        >
          Our investors backing DeFi evolution
        </div>
        <div ref={flexRef} className="flex flex-row justify-around mt-20">
          {partner.map((item) => (
            <div className="flex flex-col items-center" key={item.id}>
              <div>
                <img className="w-[64px] h-[64px]" src={item.src}></img>
              </div>
              <div className=" text-gray-400 text-2xl pt-5">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dpartner;
