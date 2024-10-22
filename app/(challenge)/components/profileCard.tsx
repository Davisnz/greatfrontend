import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="flex w-[340px] flex-col items-center rounded-lg bg-white px-4 py-6 text-center drop-shadow-md">
      <Image
        src="/images/testimonialCard/profile-thumbnail.png"
        alt="Avatar"
        width={64}
        height={64}
        className="mb-6"
      />
      <h1 className="mb-1 text-xl font-medium leading-7 text-[#171717]">
        Sarah Dole
      </h1>
      <h2 className="mb-6 text-sm font-normal leading-5 text-[#525252]">
        Front End Engineer @ Microsoft
      </h2>
      <p className="text-base font-normal leading-6 text-[#525252]">
        I turn coffee into bugs which are fixed by someone else. Certified Stack
        Overflow and ChatGPT developer.
      </p>
      <button className="mb-6 mt-10 w-full rounded-[4px] bg-indigo-700 px-4 py-[10px] text-base font-medium leading-6 text-white transition-colors duration-300 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-20">
        Contact me
      </button>
      <div className="flex justify-between gap-7 py-2">
        <Link href="https://github.com" target="_blank">
          <Image
            src="/icons/github.svg"
            height={20}
            width={20}
            alt="github icon"
            className="transition-colors duration-300 hover:rounded-[4px] hover:bg-white"
          />
        </Link>

        <Link href="https://LinkedIn.com" target="_blank">
          <Image
            src="/icons/linkedin.svg"
            height={20}
            width={20}
            alt="LinkedIn icon"
            className="transition-colors duration-300 hover:rounded-[4px] hover:bg-white"
          />
        </Link>

        <Link href="https://instagram.com" target="_blank">
          <Image
            src="/icons/instagram.svg"
            height={20}
            width={20}
            alt="Instagram icon"
            className="transition-colors duration-300 hover:rounded-[4px] hover:bg-white"
          />
        </Link>

        <Link href="https://twitter.com" target="_blank">
          <Image
            src="/icons/twitter.svg"
            height={20}
            width={20}
            alt="Twitter icon"
            className="transition-colors duration-300 hover:rounded-[4px] hover:bg-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
