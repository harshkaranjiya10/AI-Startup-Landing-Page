"use client";
import { useRef } from "react";
import Button from "../components/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import starsBg from "@/asserts/stars.png";

export default function CallToAction() {
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
    <div className="py-20 md:py-24">
      <div className="container mx-auto">
        <motion.div
          ref={sectionRef}
          animate={{ backgroundPositionX: starsBg.width }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `url(${starsBg.src})}`,
            backgroundPositionY,
          }}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
        >

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
