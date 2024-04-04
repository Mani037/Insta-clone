import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link href="/" className="inline-flex lg:hidden">
          <Image
            src={"/800px-Instagram_logo_2016.webp"}
            width={50}
            height={50}
            alt="Instagram Clone"
          />
        </Link>

        <Link href="/" className="hidden lg:inline-flex">
          <Image
            src={"/Instagram_logo_black.webp"}
            width={90}
            height={90}
            alt="Instagram Text"
          />
        </Link>

        {/* search input */}

        <input
          type="search"
          placeholder="search"
          className="bg-gray-50 border border-gray-200 text-sm 
          rounded w-full  py-2 px-2 max-w-[210px]"
        ></input>

        {/* menu items */}

        <button className="text-sm font-semibold text-blue-500">Log In</button>
      </div>
    </div>
  );
};

export default Header;
