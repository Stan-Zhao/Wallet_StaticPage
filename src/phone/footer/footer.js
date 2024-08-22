function Footer() {
  return (
    <div className="flex flex-col justify-around items-center bg-[rgb(0,2,16)] w-full h-[350px] text-center text-white">
      <div className="pt-2">
        <img className="w-[110px]" src="/dodologo.png"></img>
      </div>
      <div className="text-gray-400 text-base">
        Be the first to know of our developments!
        <br />
        Fresh updotes in your inbox.
      </div>
      <input
        className="h-11 w-[80%] rounded-xl bg-[#000214] outline-none text-white text-center text-lg border-2 border-[rgb(31,31,152)]"
        type="email"
        placeholder="Enter email"
      />

      <button className="inline-block w-[80%] bg-gradient-to-r from-[rgb(63,0,205)] to-[rgb(47,106,244)] text-lg font-bold rounded-lg text-white h-12 hover:bg-gradient-to-r hover:from-[rgb(47,106,244)] hover:to-[rgb(63,0,205)]">
        Explore Products
      </button>
      <div className=" flex justify-around w-full pt-4 pb-5">
        <a className="w-8 h-8 rounded-xl bg-gradient-to-r from-[rgb(69,8,209)] to-[rgb(47,106,244)] rotate-45"></a>
        <a className="w-8 h-8 rounded-xl bg-gradient-to-r from-[rgb(69,8,209)] to-[rgb(47,106,244)] rotate-45"></a>
        <a className="w-8 h-8 rounded-xl bg-gradient-to-r from-[rgb(69,8,209)] to-[rgb(47,106,244)] rotate-45"></a>
      </div>
    </div>
  );
}

export default Footer;
