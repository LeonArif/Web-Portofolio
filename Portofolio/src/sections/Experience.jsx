import React from "react";
import { motion } from "framer-motion";

// Data logo - gampang banget ditambah! 
const techLogos = [
  { name: "Git", image: "/images/experience/git.png" },
  { name: "HTML", image:  "/images/experience/html.png" },
  { name: "CSS", image:  "/images/experience/css.png" },
  { name: "JavaScript", image:  "/images/experience/js.jpeg" },
  { name: "Tailwind", image: "/images/experience/tailwind.png" },
  { name: "Node. js", image: "/images/experience/node.png" },
  { name: "React", image:  "/images/experience/react.png" },
  { name: "Java", image: "/images/experience/java.png" },
  { name: "C", image:  "/images/experience/c.png" },
  { name: "Python", image: "/images/experience/python.png" },
  { name: "C++", image:  "/images/experience/cpp.png" },
];

// Split jadi 3 layer (bisa disesuaikan)
const layer1 = techLogos.slice(0, 4);
const layer2 = techLogos.slice(4, 7);
const layer3 = techLogos.slice(7);

// Component untuk satu row infinite carousel
function InfiniteCarouselRow({ items, direction = "left", duration = 20 }) {
  // Duplikasi lebih banyak untuk item yang sedikit
  const repeatCount = items.length <= 3 ? 8 : 6;
  const duplicatedItems = Array(repeatCount).fill(items).flat();

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion. div
        className="flex gap-8 items-center"
        animate={{
          x: direction === "left" 
            ? [0, `-${100 / repeatCount}%`]
            : [`-${100 / repeatCount}%`, 0],
        }}
        transition={{
          duration: duration,
          repeat:  Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          width: "max-content",
        }}
      >
        {duplicatedItems.map((tech, idx) => (
          <div
            key={`${tech.name}-${idx}`}
            className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-gray-900/50 border border-gray-700 rounded-xl flex items-center justify-center p-4 hover: scale-110 hover:border-white transition-all duration-300 shadow-lg"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 md:px-16 bg-black text-white flex flex-col items-center relative
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]
        after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-center mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y:  0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h1>
      <motion.p
        className="text-center text-gray-400 text-lg mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once:  true }}
        transition={{ duration:  0.6, delay: 0.1 }}
      >
        Here are the technologies and programming languages I work with. 
      </motion.p>

      {/* Infinite Carousel Layers */}
      <div className="w-full max-w-7xl space-y-6 mb-16">
        {/* Layer 1 - Left to Right (4 items) */}
        <InfiniteCarouselRow items={layer1} direction="left" duration={35} />
        
        {/* Layer 2 - Right to Left (3 items) */}
        <InfiniteCarouselRow items={layer2} direction="right" duration={30} />
        
        {/* Layer 3 - Left to Right (4 items) */}
        <InfiniteCarouselRow items={layer3} direction="left" duration={35} />
      </div>
    </section>
  );
}