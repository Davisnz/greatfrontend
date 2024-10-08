import Image from "next/image";
import { testimonialCard } from "@/constants";

const TestimonialCard = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[340px] rounded-lg bg-white p-6 text-black shadow-md">
        {testimonialCard.map((testimonial) => (
          <div key={testimonial.name}>
            <div className="mb-4 flex items-center">
              <Image
                src={testimonial.image.src}
                width={testimonial.image.width}
                height={testimonial.image.height}
                alt={testimonial.image.alt}
                className="mr-3 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold leading-7">
                  {testimonial.name}
                </p>
                <p className="text-sm font-normal leading-5 text-[#525252]">
                  {testimonial.twitter}
                </p>
              </div>
            </div>
            <p className="text-base font-normal leading-6 text-[#525252]">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
