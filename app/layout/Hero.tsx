"use client";
import starsBg from "@/asserts/stars.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "@/app/components/Button";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="flex md:h-[800px] items-center h-[492px] overflow-hidden relative [mask-image:linear-gradient(to_top,transparent,black_10%_90%,transparent)]"
      animate={{ backgroundPositionX: starsBg.width }}
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
      transition={{ duration: 120, ease: "linear", repeat: Infinity }}
    >
      {/* Purple background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/* Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-500 border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

      {/* Ring: Inner Middle Outer */}
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute h-[344px]  w-[344px] md:h-[580px] md:w-[580px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white/40 rounded-full"></div>
        <div className="absolute h-2 w-2 top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/40 rounded-full"></div>
        <div className="absolute h-5 w-5 top-1/2 left-full -translate-y-1/2 -translate-x-1/2 border border-white/40 rounded-full inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white/40 rounded-full"></div>
        </div>
      </motion.div>
      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"></div>
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"
      >
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white/40 rounded-full"></div>
      </motion.div>

      <div className="container mx-auto relative mt-16">
        <h1 className="text-8xl md:text-[168px] font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center">
          Elevate your site{"'"}s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
}
