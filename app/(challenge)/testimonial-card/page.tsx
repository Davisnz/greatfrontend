import TestimonialCard from "./components/testimonialCard";

const TestimonialPage = () => {
  return (
    <main className="testimonials-card-bg flex min-h-screen w-full flex-col items-center justify-center ">
      <div className=" flex-row gap-4">
        <TestimonialCard />
      </div>
    </main>
  );
};

export default TestimonialPage;
