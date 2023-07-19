import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full p-4 flex justify-center text-lg gap-12'>
      <Link href='/'>
        <div className='cursor-pointer transition-all duration-75 px-1 hover:border-b-2'>
          Home
        </div>
      </Link>
      <Link href='/buy'>
        <div className='cursor-pointer transition-all duration-75 px-1 hover:border-b-2'>
          Buy
        </div>
      </Link>
      <Link href='/sell'>
        <div className='cursor-pointer transition-all duration-75 px-1 hover:border-b-2'>
          Sell
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
