"use client";
import productImage from "@/asserts/product-image.png";
import Image from "next/image";

import { motion } from "framer-motion";

export default function Features() {
  const tabs = [
    {
      icon: "/assets/lottie/vroom.lottie",
      title: "User-friendly dashboard",
      isNew: false,
      backgroundPositionX: 0,
      backgroundPositionY: 0,
      backgroundSizeX: 150,
    },
    {
      icon: "/assets/lottie/click.lottie",
      title: "One-click optimization",
      isNew: false,
      backgroundPositionX: 98,
      backgroundPositionY: 100,
      backgroundSizeX: 135,
    },
    {
      icon: "/assets/lottie/stars.lottie",
      title: "Smart keyword generator",
      isNew: true,
      backgroundPositionX: 100,
      backgroundPositionY: 27,
      backgroundSizeX: 177,
    },
  ];

  return (
    <div className="py-20 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate you SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mx-20 my-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative"
            >
              <motion.div className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"></motion.div>
              <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center"></div>
              {tab.title}
            </div>
          ))}
        </div>
        <div className="p-4 mx-20 border border-white/20 rounded-xl max-h-screen overflow-hidden">
          <div className="">
            <Image
              src={productImage}
              width={0}
              height={0}
              alt=""
              className="w-auto border border-white/20 rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
