import Bar from "./bar";

function HeaderPhone() {
  return (
    <div
      className="fixed top-0 left-0 right-0 backdrop-blur-sm w-full 
    "
    >
      <div className="flex justify-between px-4 py-3 backdrop-blur-md">
        <div className="">
          <img src="/dodologo.png" alt="logo" className="w-[100px] h-[43px]" />
        </div>
        <div>
          <Bar />
        </div>
      </div>
    </div>
  );
}
export default HeaderPhone;
