function Dfooter() {
  return (
    <div className="flex flex-row justify-between bg-[rgb(0,2,16)] px-[69.5px] h-[490.63px] pt-16 pb-32 text-left text-white text-sm">
      <div className="flex flex-col w-[295px]">
        <div className="">
          <img className="w-[200px]" src="/dodologo.png" />
        </div>
        <div className=" my-6">
          Be the first to know of our developments! Fresh updotes in your inbox!
        </div>
        <div className="flex gap-x-4">
          <a className="w-10 h-10 rounded-lg bg-[rgb(106,94,245)]"></a>
          <a className="w-10 h-10 rounded-lg bg-[rgb(106,94,245)]"></a>
          <a className="w-10 h-10 rounded-lg bg-[rgb(106,94,245)]"></a>
        </div>
        <div className="mt-16 opacity-50">
          Copyright ©2024 Dodo. All Rights Reserved.
        </div>
      </div>
      <div className="flex flex-row w-[890px] text-[rgb(229,231,235)] justify-between">
        <div className="flex flex-col gap-y-5">
          <div className="text-lg font-bold text-white">Product</div>
          <div>Product1</div>
          <div>Product2</div>
          <div>Product3</div>
          <div>Product4</div>
          <div>Product5</div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="text-lg font-bold text-white ">Resources</div>
          <div>Activity1</div>
          <div>Activity2</div>
          <div>Activity3</div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className="text-lg font-bold text-white">Company</div>
          <div>About us</div>
          <div>Help center</div>
        </div>
        <div>
          <div className="text-lg text-white font-bold">Connect with us</div>
          <div className="mt-10">
            <div className="flex flex-row items-center">
              <input
                className="h-11 w-[200px] rounded-l-xl bg-[#000214] outline-none text-white text-center text-sm border-2 border-[#6b5ffe] border-r-2"
                type="email"
                placeholder="Enter email"
              />
              <button className="w-[100px] h-[44px]  text-white rounded-r-xl bg-[#6b5ffe]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dfooter;

// <div className="pt-2">
//   <img className="w-[110px]" src="/dodologo.png"></img>
// </div>
// <div className="text-gray-400 text-base">
//   Be the first to know of our developments!
//   <br />
//   Fresh updotes in your inbox.
// </div>
// <input
//   className="h-11 w-[80%] rounded-xl bg-[#000214] outline-none text-white text-center text-lg border-2 border-[rgb(31,31,152)]"
//   type="email"
//   placeholder="Enter email"
// />

// <button className="inline-block w-[80%] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] text-lg font-bold rounded-lg text-white h-12 hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)]">
//   Explore Products
// </button>
// <div className=" flex justify-around w-full pt-4 pb-5">
//   <a className="w-8 h-8 rounded-xl bg-gradient-to-r from-[rgb(69,8,209)] to-[rgb(47,106,244)] rotate-45"></a>
//   <a className="w-8 h-8 rounded-xl bg-gradient-to-r from-[rgb(69,8,209)] to-[rgb(47,106,244)] rotate-45"></a>
//   <a className="w-8 h-8 rounded-xl bg-gradient-to-r from-[rgb(69,8,209)] to-[rgb(47,106,244)] rotate-45"></a>
// </div>
