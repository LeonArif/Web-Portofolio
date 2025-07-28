import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./../../animations/effects/Carousel";

const CAROUSEL_WIDTH = 520;
const TIMELINE_HEIGHT = 800;
const TIMELINE_DOT_SIZE = 80;
const TIMELINE_DOT_SIZE_HOVER = 110;
const TIMELINE_MARGIN = 104;

const expData = [
  {
    year: 2023,
    side: "left",
    carouselItems: [
      { title: "Text Animations", description: "Cool text animations for your projects.", id: 1, image: "src/assets/new_arc.jpg" },
      { title: "2023 Special", description: "Animasi khusus tahun 2023.", id: 2, image: "src/assets/new_arc.jpg" },
    ],
  },
  {
    year: 2024,
    side: "right",
    carouselItems: [
      { title: "Components", description: "Reusable components for your projects.", id: 3, image: "src/assets/new_arc.jpg" },
      { title: "2024 Launch", description: "Peluncuran besar di tahun 2024.", id: 4, image: "src/assets/new_arc.jpg" },
    ],
  },
  {
    year: 2025,
    side: "left",
    carouselItems: [
      { title: "Common UI", description: "Common UI components are coming soon!", id: 5, image: "src/assets/new_arc.jpg" },
      { title: "2025 Vision", description: "Rencana masa depan 2025.", id: 6, image: "src/assets/new_arc.jpg" },
      { title: "2025 Vision", description: "lorem ipsum dolor sit amet consectetur adipisicing elit.", id: 7, image: "src/assets/new_arc.jpg" },
    ],
  },
];

const positions = [
  {
    dotTop: 0,
    carouselStyle: {
      left: `calc(50% - ${CAROUSEL_WIDTH}px - ${TIMELINE_MARGIN}px)`,
      top: 0,
    },
  },
  {
    dotTop: TIMELINE_HEIGHT / 2 - TIMELINE_DOT_SIZE / 2,
    carouselStyle: {
      left: `calc(50% + ${TIMELINE_MARGIN}px)`,
      top: TIMELINE_HEIGHT / 2 - CAROUSEL_WIDTH / 4,
    },
  },
  {
    dotTop: TIMELINE_HEIGHT - TIMELINE_DOT_SIZE,
    carouselStyle: {
      left: `calc(50% - ${CAROUSEL_WIDTH}px - ${TIMELINE_MARGIN}px)`,
      top: TIMELINE_HEIGHT - CAROUSEL_WIDTH / 2.2,
    },
  },
];

export default function ExperienceTimeline() {
  const [hovered, setHovered] = useState(null);

  // Semuanya dibungkus AnimatePresence supaya fade-in/fade-out
  return (
    <AnimatePresence>
      <motion.section
        id='experience'
        key="exp-section"
        className="scroll-mt-24 mt-2 w-full font-bold flex flex-col items-center relative"
        style={{ minHeight: TIMELINE_HEIGHT + 200 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Animated Title */}
        <motion.h1
          className="text-5xl text-center pb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Experience
        </motion.h1>
        <motion.h1
          className="text-center pb-16 font-normal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          tes
        </motion.h1>

        {/* Timeline wrapper */}
        <div className="relative w-full max-w-6xl mx-auto" style={{ minHeight: `${TIMELINE_HEIGHT}px` }}>
          {/* Timeline vertical line */}
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center z-10"
            style={{
              width: "32px",
              height: `${TIMELINE_HEIGHT}px`,
            }}
          >
            <div
              className="bg-[#FFD700] w-4 h-full rounded-full"
              style={{ boxShadow: "0 0 24px #FFD700" }}
            />
            {/* Dots */}
            {positions.map((pos, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  top: pos.dotTop,
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  zIndex: 20,
                  width: hovered === idx ? TIMELINE_DOT_SIZE_HOVER : TIMELINE_DOT_SIZE,
                  height: hovered === idx ? TIMELINE_DOT_SIZE_HOVER : TIMELINE_DOT_SIZE,
                  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                  boxShadow:
                    hovered === idx
                      ? "0 0 28px #FFD700, 0 0 0 8px rgba(255,215,0,0.15)"
                      : "0 0 20px #FFD700, 0 0 0 8px rgba(255,215,0,0.15)",
                }}
                className="flex items-center justify-center bg-white border-8 border-[#FFD700] shadow-lg rounded-full cursor-pointer relative"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className={`font-bold text-black absolute left-1/2 top-1/2
                    transition-all duration-300
                    ${hovered === idx ? "text-2xl opacity-100" : "text-lg opacity-0"}
                  `}
                  style={{
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                  }}
                >
                  {expData[idx].year}
                </span>
              </div>
            ))}
          </div>

          {/* Carousels, ditempatkan absolut dengan margin & animasi */}
          {expData.map((exp, idx) => (
            <motion.div
              key={exp.year}
              style={{
                position: "absolute",
                ...positions[idx].carouselStyle,
                width: CAROUSEL_WIDTH,
                zIndex: 30,
              }}
              className="flex items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + idx * 0.15 }}
            >
              <Carousel items={exp.carouselItems} baseWidth={CAROUSEL_WIDTH} />
            </motion.div>
          ))}
        </div>
        <div className="mt-32"
          style={{
            height: '2px',
            width: '80%',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, rgba(255,180,0,0) 0%, #FFD700 20%, #222 50%, #FFD700 80%, rgba(255,215,0,0) 100%)',
          }}
        />
      </motion.section>
    </AnimatePresence>
  );
}