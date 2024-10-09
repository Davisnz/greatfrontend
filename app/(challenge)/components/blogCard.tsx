import React from "react";
import Image from "next/image";

const blogCard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <div className="max-w-[340px]">
        <div className="relative aspect-[16/9] h-72 w-full">
          <Image
            src="/images/02-blog-card/feature.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Feature image"
            className="rounded-t-lg" // Optional: add rounded corners to the top of the image
          />
        </div>

        <div className="flex flex-col rounded-b-lg bg-white px-4 py-6 drop-shadow-sm">
          <p className="mb-2">
            <span className=" rounded-full border-2 border-green-200 bg-green-50 px-2 py-[2px] text-sm font-normal leading-5 text-green-700">
              Interior
            </span>
          </p>
          <h2 className="mb-3 text-lg font-semibold leading-7 ">
            Top 5 Living Room Inspirations
          </h2>
          <p className="mb-6 text-base font-medium leading-6 text-[#525252]">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <button className="flex items-center gap-[6px] text-base font-semibold leading-6 text-indigo-700">
            Read more{" "}
            <Image
              src="/icons/rightArrow.svg"
              width={20}
              height={20}
              alt="Right Arrow"
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default blogCard;
