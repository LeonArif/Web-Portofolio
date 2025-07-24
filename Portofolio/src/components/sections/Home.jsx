import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import "./../css/Navbar.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ballRef = useRef(null);
  const starRef = useRef(null);
  const hiRef = useRef(null);
  const typeRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const star = starRef.current;
    const hi = hiRef.current;
    const type = typeRef.current;
    const desc = descRef.current;

    if (!ball || !star || !hi || !type || !desc) return;

    const starLength = star.getTotalLength();
    star.style.strokeDasharray = starLength;
    star.style.strokeDashoffset = starLength;

    // Bola: posisi awal di kanan (x: 400px), visible
    gsap.set(ball, { x: 400, opacity: 1 });
    // Bintang: disembunyikan dulu
    gsap.set(star, { opacity: 0 });
    // Teks: posisi awal di kiri + transparan
    gsap.set([hi, type, desc ], { x: -200, opacity: 0 });

    // Timeline animasi: bola gelinding ke tengah, bintang, lalu teks2 masuk dari kiri
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ball,
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true, // aktifkan untuk debug
      }
    });

    // Step 1: Bola gelinding ke tengah
    tl.to(ball, {
      x: 0,
      duration: 1.2,
      ease: "power2.inOut"
    });

    // Step 2: Bintang muncul dan tergambar
    tl.to(star, {
      opacity: 1,
      duration: 0.1,
      ease: "none"
    });
    tl.to(star, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power1.inOut"
    }, "-=0.1"); // mulai hampir bersamaan dengan opacity

    // Step 3: Teks-teks masuk dari kiri satu per satu
    tl.to(hi, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "+=0.2");
    tl.to(type, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4");
    tl.to(desc, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4");
  }, []);

  return (
    <>
      {/* Section Home */}
      <nav className="flex top-0 justify-between items-center z-50 px-36 py-5">
        <div className="flex items-center text-white">
          {/* Star logo kecil di navbar */}
          <svg width="32" height="32" viewBox="0 0 200 200">
            <polyline
              points="100,20 123,82 190,82 136,125 155,190 100,150 45,190 64,125 10,82 77,82 100,20"
              stroke="#FFD700"
              strokeWidth="8"
              fill="none"
            />
          </svg>
          <span className="ml-6">LEONARD</span>
        </div>
        <div className="flex gap-14">
          <button
            className="px-2 py-1 rounded text-white underline-animate"
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ABOUT ME
          </button>
          <button
            className="px-2 py-1 rounded text-white underline-animate"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            PROJECTS
          </button>
          <button
            className="px-2 py-1 rounded text-white underline-animate"
            onClick={() => {
              const el = document.getElementById('contacts');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            CONTACTS
          </button>
        </div>
      </nav>
      {/* Section Home */}
      <section
        id="home"
        className="scroll-mt-24 flex flex-col items-center justify-center min-h-[80vh] pb-20 text-white px-6"
      >
        {/* Star SVG animasi (GSAP) menggantikan avatar dan background */}
        <motion.div
          className="relative flex items-center justify-center w-full"
          style={{
            minHeight: "unset",
            marginBottom: 4,
          }}
        >
          <svg
            width="250"
            height="250"
            viewBox="0 0 200 200"
            style={{
              display: 'block',
              margin: '0 auto',
              zIndex: 2,
              background: 'rgba(20,20,30,0.3)',
              borderRadius: '50%',
              boxShadow: '0 4px 32px 0 #FFD70050',
              padding: "14px",
              maxWidth: "100%",
              marginBottom: "8px",
            }}
          >
            {/* Bola hitam/transparan di belakang bintang */}
            <circle
              ref={ballRef}
              cx="100"
              cy="100"
              r="90"
              fill="rgba(20,20,30,0.9)"
              style={{
                filter: "drop-shadow(0 0 32px #FFD700)",
                transition: "box-shadow 0.3s",
              }}
            />
            {/* Polyline bintang */}
            <polyline
              ref={starRef}
              points="98.5,10 122,78 180,78 130,120 148,170 100,140 52,170 70,120 20,78 78,78 100,10"
              stroke="#FFD700"
              strokeWidth="8"
              fill="none"
              style={{
                filter: "drop-shadow(0 0 10px #FFD700)",
              }}
            />
          </svg>
        </motion.div>
        {/* Judul besar */}
        <motion.h1
          ref={hiRef}
          className="text-5xl md:text-5xl mb-5 text-center font-bold"
        >
          Turning your ideas into reality!
        </motion.h1>
        {/* TypeAnimation */}
        <motion.p
          ref={typeRef}
          className="text-xl md:text-2xl mb-4 text-center font-semibold"
        >
          Specializing in —{" "}
          <TypeAnimation
            sequence={[
              "Front-end Website",
              1500,
              "Back-end Solutions",
              1500,
              "WordPress Sites",
              1500,
              "UI/UX Designs",
              1500,
              "All the projects you imagine!",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.p>
        {/* Deskripsi */}
        <motion.p
          ref={descRef}
          className="max-w-2xl text-base md:text-lg text-center mb-12"
        >
          Every project begins with a single wish—let’s fulfill yours!
        </motion.p>
        {/* Social icons */}
      </section>
      {/* Bottom gradient line */}
      <div className="w-full flex justify-center mt-5 mb-20">
        <div
          style={{
            height: '2px',
            width: '80%',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, rgba(255,180,0,0) 0%, #FFD700 20%, #222 50%, #FFD700 80%, rgba(255,215,0,0) 100%)',
          }}
        />
      </div>
    </>
  );
}