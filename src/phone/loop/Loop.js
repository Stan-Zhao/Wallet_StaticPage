import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// 模拟的加密货币数据
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

function Loop() {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (containerElement) {
      // 获取所有 box 类的元素
      const boxes = Array.from(containerElement.querySelectorAll(".box"));

      // 在这里可以对 boxes 执行动画等操作
      gsap.to(boxes, {
        x: "+=900",
        duration: 5,
        ease: "none",
        // modifiers: {
        //   x: gsap.utils.unitize((x) => parseFloat(x) % 900), // 将 x 值限制在 0 到 500 之间
        // },
        repeat: -1,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-[900px] h-[100px] relative"
    >
      {cryptoData.map((item) => (
        <div
          key={item.key}
          className="box w-24 h-24 bg-blue-500 absolute"
          style={{ left: `${item.key * 120}px` }} // 为每个 box 设置不同的初始 left 值
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Loop;
