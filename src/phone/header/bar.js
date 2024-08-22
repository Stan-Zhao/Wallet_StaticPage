import { useState } from "react";
import { Transition } from "@headlessui/react";

function Bar() {
  const [pull, setPull] = useState(false);

  return (
    <button
      onClick={() => setPull(!pull)}
      onBlur={() => setPull(false)}
      className="relative float-right mt-1 bg-[rgb(106,92,250)] rounded-md w-[40px] h-[40px]"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-8 mx-auto my-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16M3.75 12h16m-16 5.25h16"
          />
        </svg>
      </div>
      <Transition
        show={pull}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute -right-5  bg-black origin-top-right w-[132px] rounded-md mt-2 text-left text-white font-semibold">
          <a href="#" className="block py-2 text-sm  h-8 px-3">
            Home
          </a>
          <a href="#" className="block py-2 text-sm  h-8 px-3">
            Product
          </a>
          <a href="#" className="block py-2 text-sm  h-8 px-3">
            About us
          </a>
          <a href="#" className="block py-2 text-sm  h-8 px-3">
            Help center
          </a>
        </div>
      </Transition>
    </button>
  );
}

export default Bar;
