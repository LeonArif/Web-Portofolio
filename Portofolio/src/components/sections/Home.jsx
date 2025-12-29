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
  const sectionRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const star = starRef.current;
    const hi = hiRef.current;
    const type = typeRef.current;
    const desc = descRef. current;

    if (! ball || !star || !hi || !type || !desc) return;

    const starLength = star. getTotalLength();
    star.style.strokeDasharray = starLength;
    star.style. strokeDashoffset = starLength;

    // Set initial states
    gsap.set(ball, { x: 400, opacity: 1 });
    gsap.set(star, { opacity: 0 });
    gsap.set([hi, type, desc], { x: -200, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    // Animasi bola gelinding
    tl.to(ball, {
      x:  0,
      duration: 1.2,
      ease: "power2.inOut"
    });
    
    // Bintang muncul
    tl.to(star, {
      opacity:  1,
      duration: 0.1,
      ease: "none"
    });
    
    // Bintang tergambar
    tl.to(star, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power1.inOut"
    }, "-=0.1");
    
    // Text masuk dari kiri satu per satu
    tl.to(hi, {
      x:  0,
      opacity: 1,
      duration:  0.5,
      ease: "power2.out"
    }, "+=0.2");
    
    tl.to(type, {
      x:  0,
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

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Navbar responsive */}
      <nav className="flex top-0 justify-between items-center z-50 px-4 sm:px-6 md:px-10 lg:px-20 py-4">
        <div className="flex items-center text-white">
          <img className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-4 mt-1" src="/images/navbar/pp.png" alt="logo"/>
          <span className="ml-2 text-xs sm:text-sm md:text-base font-semibold">LEONARD</span>
        </div>
        <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 justify-end">
          <button
            className="px-1 sm:px-2 py-1 text-[10px] sm:text-xs md:text-sm lg: text-base rounded text-white underline-animate whitespace-nowrap"
            onClick={() => {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ABOUT ME
          </button>
          <button
            className="px-1 sm:px-2 py-1 text-[10px] sm:text-xs md:text-sm lg:text-base rounded text-white underline-animate whitespace-nowrap"
            onClick={() => {
              const el = document.getElementById('experience');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EXPERIENCE
          </button>
          <button
            className="px-1 sm:px-2 py-1 text-[10px] sm:text-xs md:text-sm lg:text-base rounded text-white underline-animate whitespace-nowrap"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            PROJECTS
          </button>
          <button
            className="px-1 sm:px-2 py-1 text-[10px] sm:text-xs md:text-sm lg: text-base rounded text-white underline-animate whitespace-nowrap"
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
        ref={sectionRef}
        className="
          scroll-mt-24 
          flex 
          flex-col 
          items-center 
          justify-center 
          min-h-[70vh] 
          pb-16 md:pb-20
          text-white 
          px-4 sm:px-6 md:px-8
          relative"
      >
        {/* Star SVG */}
        <motion.div
          className="relative flex items-center justify-center w-full pb-8 pt-10"
          style={{
            minHeight: "unset",
            marginBottom: 4,
          }}
        >
          <svg
            viewBox="0 0 200 200"
            style={{
              width: "clamp(160px, 30vw, 280px)",
              height: "clamp(160px, 30vw, 280px)",
              display: 'block',
              margin: '0 auto',
              zIndex: 2,
              background: 'rgba(20,20,30,0.3)',
              borderRadius: '50%',
              boxShadow:  '0 4px 32px 0 #7C9CBF80',
              padding: "14px",
              maxWidth:  "100%",
              marginBottom: "8px",
            }}
          >
            <circle
              ref={ballRef}
              cx="100"
              cy="100"
              r="90"
              fill="rgba(20,20,30,0.9)"
              style={{
                filter:  "drop-shadow(0 0 32px #FFFF)",
                transition: "box-shadow 0.3s",
              }}
            />
            <polyline
              ref={starRef}
              points="98.5,10 122,78 180,78 130,120 148,170 100,140 52,170 70,120 20,78 78,78 100,10"
              stroke="#FFFF"
              strokeWidth="8"
              fill="none"
              style={{
                filter: "drop-shadow(0 0 10px #7C9CBF)",
              }}
            />
          </svg>
        </motion.div>

        {/* Heading */}
        <motion.h1
          ref={hiRef}
          className="text-3xl md:text-5xl mb-5 text-center font-bold px-2"
        >
          Turning your ideas into reality! 
        </motion.h1>

        {/* TypeAnimation */}
        <motion. p
          ref={typeRef}
          className="text-base md:text-2xl mb-4 text-center font-semibold px-2"
        >
          Specializing in —{" "}
          <TypeAnimation
            sequence={[
              "Front-end Website", 1500,
              "Back-end Solutions", 1500,
              "WordPress Sites", 1500,
              "UI/UX Designs", 1500,
              "All the projects you imagine!", 1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ display:  "inline-block" }}
            repeat={Infinity}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          ref={descRef}
          className="max-w-2xl text-sm md:text-lg text-center mb-10 md:mb-12 px-4 text-gray-300"
        >
          Every project begins with a single wish—let's fulfill yours!
        </motion.p>

        {/* Border bawah */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <div className="w-[90%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
      </section>
    </>
  );
}