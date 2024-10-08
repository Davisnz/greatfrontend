import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="w-[340px] rounded-lg bg-white p-6 text-black shadow-md">
      <div className="flex flex-row">
        <Image
          src="/images/testimonialCard/profile-thumbnail.png"
          width={48}
          height={48}
          alt="Profile thumbnail"
          className="mb-3 rounded-full"
        />
        <div className="flex flex-col pl-2 ">
          <p className="text-lg font-semibold leading-7">Sarah Dole</p>
          <p className="text-sm font-normal leading-5 text-[#525252] ">
            @sarahdole
          </p>
        </div>
      </div>
      <p className="p-1 text-base font-normal leading-6 text-[#525252]">
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </p>
    </div>
  );
};

export default TestimonialCard;
