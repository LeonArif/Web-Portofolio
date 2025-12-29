import { useRef, useEffect, useState } from "react";
import PixelTransition from './../../animations/effects/PixelTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap. registerPlugin(ScrollTrigger);

export default function About({ avatarRef: parentAvatarRef }) {
  const aboutSectionRef = useRef(null);
  const titleRef = useRef(null);
  const avatarAnimRef = useRef(null);
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const socialRef = useRef(null);

  const [showPixelTransition, setShowPixelTransition] = useState(false);

  useEffect(() => {
    if (
      !aboutSectionRef.current ||
      !titleRef.current ||
      !avatarAnimRef. current ||
      !helloRef.current ||
      !nameRef.current ||
      !descRef.current ||
      !socialRef.current
    ) {
      return;
    }

    gsap.set([
      titleRef.current,
      avatarAnimRef.current,
      helloRef.current,
      nameRef.current,
      descRef. current,
      socialRef.current,
    ], { clearProps: 'all' });

    const t1 = gsap. timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      }
    });

    t1.from(titleRef.current, {
      y: 80,
      opacity:  0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(avatarAnimRef.current, {
      x: -80,
      opacity: 0,
      duration:  0.5,
      ease: "power2.out",
      onComplete: () => setShowPixelTransition(true)
    })
    .from(helloRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out"
    })
    .from(nameRef. current, {
      x: 100,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out"
    })
    .from(descRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out"
    })
    .from(socialRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out"
    });

    return () => {
      t1.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="about" className="py-12 md:py-20 px-4 md:px-0" ref={aboutSectionRef}>
      <div className="mb-8 md:mb-0">
        <h1 ref={titleRef} className="text-3xl md:text-5xl text-center font-semibold text-white">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-16 md:py-32 px-4 md:px-8 lg:px-32 justify-between relative
        after:content-[''] after:absolute after: bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-[90%] after:h-[2px]
        after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent"
      >
        {/* Avatar */}
        <div className="flex-shrink-0 lg:pl-24">
          <div
            ref={el => {
              avatarAnimRef.current = el;
              if (parentAvatarRef) parentAvatarRef.current = el;
            }}
            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px]"
          >
            <PixelTransition
              firstContent={
                <img
                  src="/images/about/foto_1.jpg"
                  className="w-full h-full object-cover object-center rounded-full block"
                  alt="Hero"
                />
              }
              secondContent={
                <img
                  src="/images/about/foto_2.jpg"
                  className="w-full h-full object-cover object-center rounded-full block"
                  alt="Hero"
                />
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="w-full h-full"
              aspectRatio="100%"
              style={{
                borderRadius: "50%",
                overflow: "hidden"
              }}
              active={showPixelTransition}
            />
          </div>
        </div>

        {/* Kolom Tulisan */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl text-white px-4 md:px-0">
          <h1 ref={helloRef} className="text-4xl md:text-5xl mb-3">Hello!</h1>
          <h2 ref={nameRef} className="text-xl md:text-2xl mb-6 md:mb-8">I'm Leonard</h2>
          <p ref={descRef} className="text-sm md:text-base leading-relaxed text-gray-300 mb-6 md:mb-0">
            I am a System Information undergraduate specializing in full-stack web development, with skills in front-end, back-end, WordPress, and UI/UX design. I enjoy building digital products, learning new technologies, and collaborating to solve real-world problems. Currently, I'm interested in software engineering, data, and cybersecurity. Welcome to my portfolio! 
          </p>
          <div ref={socialRef} className="flex gap-8 md:gap-20 mt-6 md:mt-8">
            <a href="https://github.com/LeonArif" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-3xl" />
            </a>
            <a href="https://www.instagram.com/leonarifs/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/leon-arif-b743b52a7/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl md:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}