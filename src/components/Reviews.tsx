import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonial = () => {
  return (
    <main
      className="w-full relative flex flex-col items-center mt-20 pt-8 mb-28 lg:px-20 md:px-16 px-4"
      id="reviews"
    >
      <h1 className="text-center font-semibold  text-3xl md:text-5xl">
        What Our Clients Are Saying
      </h1>
      <h2 className="relative font-regular text-base md:text-lg text-gray-400 tracking-wide my-8 text-center max-w-3xl mx-auto antialiased">
        We’re dedicated to securing smart contracts with thorough, expert
        audits. <br/>
        But don’t just take our word for it—see what our clients have to
        say about their experience!
      </h2>

      <div className="my-7 w-full rounded-md flex flex-col font-barlow  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        {/* <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                /> */}
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </main>
  );
};

export default Testimonial;

type TestimonialTypes = {
  message: string;
  name: string;
  title: string;
};

const testimonials: TestimonialTypes[] = [
  {
    message:
      "As a client of 33 Audits, Juice Box is thrilled with their work on our protocol. The audit was incredibly detailed and thorough, and the team was highly responsive with excellent communication throughout the process. The value they provided is outstanding, and we look forward to many more collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    message:
      "As a client of 33 Audits, Juice Box is thrilled with their work on our protocol. The audit was incredibly detailed and thorough, and the team was highly responsive with excellent communication throughout the process. The value they provided is outstanding, and we look forward to many more collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    message:
      "As a client of 33 Audits, Juice Box is thrilled with their work on our protocol. The audit was incredibly detailed and thorough, and the team was highly responsive with excellent communication throughout the process. The value they provided is outstanding, and we look forward to many more collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    message:
      "As a client of 33 Audits, Juice Box is thrilled with their work on our protocol. The audit was incredibly detailed and thorough, and the team was highly responsive with excellent communication throughout the process. The value they provided is outstanding, and we look forward to many more collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    message:
      "As a client of 33 Audits, Juice Box is thrilled with their work on our protocol. The audit was incredibly detailed and thorough, and the team was highly responsive with excellent communication throughout the process. The value they provided is outstanding, and we look forward to many more collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
  {
    message:
      "As a client of 33 Audits, Juice Box is thrilled with their work on our protocol. The audit was incredibly detailed and thorough, and the team was highly responsive with excellent communication throughout the process. The value they provided is outstanding, and we look forward to many more collaborations.",
    name: "John Doe",
    title: "CEO, Tech Innovations Inc.",
  },
];
