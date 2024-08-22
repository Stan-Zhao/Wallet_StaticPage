import { useEffect, useRef } from "react";
import gsap from "gsap";

function Dadvantage() {
  const spin1 = useRef(null);
  const spin2 = useRef(null);
  const spin3 = useRef(null);
  const spin4 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const img = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      img.current,
      { rotate: 720, scale: 0 }, // 初始状态，旋转1080度，缩放为0（完全缩小）
      {
        opacity: 1,
        y: 0,
        rotate: 0, // 目标状态，旋转回到正常位置
        scale: 1.3, // 目标状态，放大到正常大小
        duration: 1,
        scrollTrigger: {
          trigger: img.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reset",
        },
      }
    );

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
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        scrollTrigger: {
          trigger: text1.current,
          start: "top 60%",
          end: "bottom 10%",
          toggleActions: "play none none reset",
        },
      }
    );

    gsap.fromTo(
      [spin4.current],
      { rotate: 0 }, // 动画开始时的状态
      { rotate: 360, duration: 3, repeat: -1, ease: "linear" } // 动画结束时的状态及其参数
    );
    gsap.fromTo(
      [spin1.current],
      { rotate: 0 }, // 动画开始时的状态
      { rotate: 360, duration: 4, repeat: -1, ease: "power1.in" } // 动画结束时的状态及其参数
    );
    gsap.fromTo(
      [spin2.current],
      { rotate: 0 }, // 动画开始时的状态
      { rotate: 360, duration: 3, repeat: -1, ease: "power1.out" } // 动画结束时的状态及其参数
    );
    gsap.fromTo(
      [spin3.current],
      { rotate: 0 }, // 动画开始时的状态
      { rotate: 360, duration: 3.5, repeat: -1, ease: "power1.inOut" } // 动画结束时的状态及其参数
    );
  }, []);
  return (
    <div className="relative w-full bg-gradient-to-b from-[rgb(12,20,30)] to-[rgb(17,23,51)] text-white text-center h-[1080px] ">
      <div ref={text1} className="text-5xl font-bold pt-[140px]">
        ADVANTAGES
      </div>
      <div ref={text2} className="text-3xl pt-[50px] font-normal">
        why choose us
      </div>
      <div className=" mt-36 grid grid-cols-2 gap-x-9 gap-y-16 xl:max-w-screen-xl mx-auto">
        {/* 组件一 */}
        <div className="flex items-center ">
          <div className="relative h-[210px] w-[6140px] text-white  bg-[rgb(24,31,44)]  rounded-[20px]  overflow-hidden">
            <div
              ref={spin1}
              className="absolute bg-[conic-gradient(transparent,#66ddf7,transparent_30%)] w-[200%] h-[200%]  -left-[50%] -top-[50%] "
            ></div>
            <div className="absolute rounded-[20px] inset-1 bg-[rgb(24,31,43)] ">
              {/* 内部flex */}
              <div className="flex relative flex-row-reverse items-center h-[210px] px-10 gap-x-10">
                <div className=" flex-shrink-0 ">
                  <img className="w-[75px] " src="/Dad1.png"></img>
                </div>
                <div className="flex flex-col text-left ">
                  <div className="font-bold text-2xl ">
                    Diverse Selection of Index Funds
                  </div>
                  <div className="text-sm text-[#a4a4a4] pt-3">
                    Dodo offers dozens of different types and themes of crypto
                    index funds, covering various fields such as BRC20, DeFi,
                    and the Solana ecosystem, catering to your investment
                    preferences and risk tolerance.
                  </div>
                </div>
                <div className="absolute ">
                  <img src="/Dad1blur.png" className="w-30" />
                </div>
                <div className="absolute  -left-9 top-10">
                  <img src="/Dad1blur.png" className="w-25 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 组件二 */}
        <div className="flex items-center ">
          <div className="relative h-[210px] w-[6140px] text-white  bg-[rgb(24,31,44)]  rounded-[20px]  overflow-hidden">
            <div
              ref={spin2}
              className="absolute bg-[conic-gradient(transparent,#66ddf7,transparent_30%)] w-[200%] h-[200%]  -left-[50%] -top-[50%] "
            ></div>
            <div className="absolute rounded-[20px] inset-1 bg-[rgb(24,31,43)] ">
              {/* 内部flex */}
              <div className="flex relative flex-row items-center h-[210px] px-10 gap-x-12">
                <div className="flex-shrink-0 ">
                  <img className="w-[75px] " src="/Dad2.png"></img>
                </div>
                <div className="flex flex-col text-left ">
                  <div className="font-bold text-2xl ">
                    Stay Ahead of Market Trends
                  </div>
                  <div className="text-sm text-[#a4a4a4] pt-3">
                    Our index funds contain a basket of digital currencies,
                    helping you capture market trends without spending a lot of
                    time and effort researching and selecting individual
                    cryptocurrencies, effortlessly seizing investment
                    opportunities.
                  </div>
                </div>
                <div className="absolute top-10">
                  <img src="/Dad2blur.png" className="w-[300px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 组件三 */}
        <div className="flex items-center ">
          <div className="relative h-[210px] w-[6140px] text-white  bg-[rgb(24,31,44)]  rounded-[20px]  overflow-hidden">
            <div
              ref={spin3}
              className="absolute bg-[conic-gradient(transparent,#66ddf7,transparent_30%)] w-[200%] h-[200%]  -left-[50%] -top-[50%] "
            ></div>
            <div className="absolute rounded-[20px] inset-1 bg-[rgb(24,31,43)] ">
              {/* 内部flex */}
              <div className="flex relative flex-row-reverse items-center h-[210px] px-10 gap-x-10">
                <div className=" flex-shrink-0 ">
                  <img className="w-[75px] " src="/Dad3.png"></img>
                </div>
                <div className="flex flex-col text-left ">
                  <div className="font-bold text-2xl ">
                    Professional Risk Management
                  </div>
                  <div className="text-sm text-[#a4a4a4]  pt-3">
                    By investing in and build your investment portfolio
                    steadily. multiple digital currencies, we help you diversify
                    investment risks, reduce the volatility of individual
                    assets, and build your investment portfolio steadily.
                  </div>
                </div>
                <div className="absolute -top-8 right-4">
                  <img src="/Dad3blur.png" className="w-30 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 组件四 */}
        <div className="flex items-center ">
          <div className="relative h-[210px] w-[6140px] text-white  bg-[rgb(24,31,44)]  rounded-[20px]  overflow-hidden">
            <div
              ref={spin4}
              className="absolute bg-[conic-gradient(transparent,#66ddf7,transparent_30%)] w-[200%] h-[200%]  -left-[50%] -top-[50%] "
            ></div>
            <div className="absolute rounded-[20px] inset-1 bg-[rgb(24,31,43)] ">
              {/* 内部flex */}
              <div className="flex relative flex-row items-center h-[210px] px-10 gap-x-12">
                <div className="flex-shrink-0 ">
                  <img className="w-[75px] " src="/Dad4.png"></img>
                </div>
                <div className="flex flex-col text-left ">
                  <div className="font-bold text-2xl ">
                    Transparent Trading Process
                  </div>
                  <div className="text-sm text-[#a4a4a4] pt-3">
                    Our funds and operational logic are deployed on blockchain
                    smart contracts, ensuring transparent and auditable
                    transactions. You can view any transaction and fund flow at
                    any time.
                  </div>
                </div>
                <div className="absolute -top-10 left-4">
                  <img src="/Dad4blur.png" className="w-[300px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={img} className="absolute top-[600px] left-[650px] ">
        <img src="/Adlogo.png" className="w-[120px]"></img>
      </div>
    </div>
  );
}
export default Dadvantage;
