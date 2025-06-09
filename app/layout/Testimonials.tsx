"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const TestimonialList = [
    {
      name: "John Doe",
      company: "ABC Company",
      message:
        "“Our teams productivity has increased significantly since we started using this tool“",
    },
    {
      name: "John Doe",
      company: "ABC Company",
      message:
        "“Our teams productivity has increased significantly since we started using this tool“",
    },
    {
      name: "John Doe",
      company: "ABC Company",
      message:
        "“Our teams productivity has increased significantly since we started using this tool“",
    },
  ];

  return (
    <div className="py-10 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="p-2 text-4xl md:text-5xl font-medium text-center tracking-tighter bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-center text-xl max-w-lg text-gray-400">
            See how our AI-powered SEO tool is transforming businesses across
            different industries.
          </p>
        </div>

        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] ">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-5 pr-5"
          >
            {[...TestimonialList, ...TestimonialList].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-2xl p-6 md:p-10 max-w-xs md:max-w-md flex-none bg-gradient-to-r from-[#15043c] to-[#3b0766]"
                >
                  <div className="py-5 text-lg tracking-tight md:text-2xl">
                    {index}
                  </div>
                  <div className="flex gap-3 items-center mt-5">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#8C45F4] after:mix-blend-soft-light before:absolute before:content-[''] before:inset-0 before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src="/vercel.svg"
                      width={4}
                      height={4}
                      alt={`Avatar for ${testimonial.name}`}
                      className="w-11 h-11 rounded-lg grayscale"
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
