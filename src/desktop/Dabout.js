import { useEffect, useRef } from "react";
import gsap from "gsap";

function Dabout() {
  const coin1 = useRef(null);
  const coin2 = useRef(null);
  const coin3 = useRef(null);
  const img = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    //文字滑动动画
    gsap.fromTo(
      text1.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text1.current,
          start: "top 90%",
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
        duration: 1.4,
        scrollTrigger: {
          trigger: text1.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      text3.current,
      { opacity: 0, y: 70 }, // 初始状态：元素完全透明，并向下偏移 70 像素
      {
        opacity: 1, // 目标状态：元素完全可见
        y: 0, // 目标状态：元素回到原始位置
        duration: 1.7, // 动画持续时间为 1.4 秒
        scrollTrigger: {
          trigger: text2.current, // 触发器：动画的触发元素
          start: "top 80%",
          end: "bottom 20%", // 当元素顶部到达视口的 10% 时结束动画
          toggleActions: "play none none reset",
        },
      }
    );

    // img动画
    gsap.fromTo(
      [img.current],
      { scale: 0.5, opacity: 0, transformOrigin: "center center" },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,

        scrollTrigger: {
          trigger: text1.current,
          start: "top 95%",
          toggleActions: "play pause resume reset",
        },
      }
    );
    // 弹跳动画
    gsap.to(coin1.current, {
      y: -150,
      repeat: -1,
      duration: 1.6,
      scale: 0.7,
      yoyo: true,
      ease: "power1.out",
    });
    gsap.to(coin2.current, {
      y: -100,
      repeat: -1,
      duration: 1,
      scale: 1.3,
      yoyo: true,
    });
    gsap.to(coin3.current, {
      y: -70, // 垂直方向移动 -70 像素
      repeat: -1, // 无限循环
      yoyo: true, // 在每个循环中反向播放动画，使其上下浮动
      duration: 0.9, // 每个动画循环的持续时间
      scale: 0.8, // 缩放至 0.8 倍大小
      ease: "power1.inOut", // 添加一个缓动效果，让动画更加平滑
    });
  });
  return (
    <div className="bg-[rgb(20,26,59)] w-full h-[1024px] text-white text-center ">
      <div className="mx-auto py-60 flex  xl:max-w-screen-xl overflow-hidden">
        {/* 左图--出现动画1 */}
        <div ref={img} className="flex-shrink-0 mr-20 relative">
          <div className="mt-20">
            <img className="w-[528px]" src="/AboutBase.png" />
          </div>
          <img ref={coin1} className="absolute top-0 left-5" src="/coin1.png" />
          <img
            ref={coin2}
            className="absolute top-0 left-[270px] scale-[70%]"
            src="/coin2.png"
          />
          <img
            ref={coin3}
            className="absolute top-0 right-10"
            src="/coin3.png"
          />
        </div>
        {/* 右图 */}
        <div className="text-left">
          {/* 下滑文字动画1 */}
          <div ref={text1} className="text-6xl font-bold">
            <span>About </span>
            <span className="text-[#3887f8]"> Dodo </span>
          </div>
          {/* 下滑文字动画2 */}
          <div ref={text2} className="mt-7 text-4xl font-semibold">
            your <span className="text-[#6b5ffe]">home </span>for crypto
            <span className="text-[#3887f8]"> index </span>funds
          </div>
          {/* 上滑文字动画1 */}
          <div ref={text3} className="mt-20 ">
            <div className="leading-7  font-medium text-gray-200 text-lg">
              Here, we'll take you on an exciting journey into the word of
              digital currencies, allowing you to effortlessly invest in a
              variety of crypto index funds tailored to diferent themes and
              types.
            </div>
            {/* 上滑文字动画2 */}
            <div className="font-medium text-gray-200 text-lg mt-8">
              With Dodo, you can seize every market opportunity, diversify your
              portfolio, and achieve wealth appreciation while mitigating risks.
            </div>
          </div>
          <div className="pt-[90px]">
            <button className="inline-block mx-auto w-[320px] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] text-3xl font-bold rounded-3xl text-white h-[70px] hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dabout;
