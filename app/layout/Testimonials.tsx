"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Testimonials() {
  const testimonialsList = [
    {
      text: "“This product has completely transformed how I manage my projects and deadlines”",
      name: "Sophia Perez",
      title: "Director @ Quantum",
    },
    {
      text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
      name: "Jamie Lee",
      title: "Founder @ Pulse",
    },
    {
      text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
      name: "Alisa Hester",
      title: "Product @ Innovate",
    },
    {
      text: "“Our team's productivity has increased significantly since we started using this tool”",
      name: "Alec Whitten",
      title: "CTO @ Tech Solutions",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients{"'"}
          strategies
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-5 pr-5 flex-none"
          >
            {[...testimonialsList, ...testimonialsList].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none"
                >
                  <div className="text-lg tracking-tight md:text-2xl">
                    {testimonial.text}
                  </div>
                  <div className="flex gap-3 items-center mt-5">
                    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#8C45F4] after:mix-blend-soft-light before:absolute before:content-[''] before:inset-0 before:border-white/30 before:z-10 before:rounded-lg">
                      <Image
                        src="vercel.svg"
                        width={0}
                        height={0}
                        alt={`logo`}
                        className="w-11 h-11 rounded-lg grayscale"
                      />
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div className="text-white/50 text-sm">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
