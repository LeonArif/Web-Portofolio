import { useRef, useEffect, useState } from "react";
import PixelTransition from './../../animations/effects/PixelTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About({ avatarRef: parentAvatarRef }) {
  const aboutSectionRef = useRef(null);
  const titleRef = useRef(null);
  const avatarAnimRef = useRef(null);
  const helloRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const socialRef = useRef(null);

  // Tambahan state untuk trigger PixelTransition
  const [showPixelTransition, setShowPixelTransition] = useState(false);

  useEffect(() => {
    if (
      !aboutSectionRef.current ||
      !titleRef.current ||
      !avatarAnimRef.current ||
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
      descRef.current,
      socialRef.current,
    ], { clearProps: 'all' });

    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      }
    });

    t1.from(titleRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(avatarAnimRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      // Trigger PixelTransition setelah avatar masuk
      onComplete: () => setShowPixelTransition(true)
    })
    .from(helloRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.2,
      ease: "power2.out"
    })
    .from(nameRef.current, {
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
    <div id="about" className="py-20" ref={aboutSectionRef}>
      <div>
        <h1 ref={titleRef} className="text-5xl text-center font-semibold text-white">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center py-32 lg:px-32 justify-between relative
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 
        after:w-[90%] after:h-[2px]
        after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent"
>
        {/* Avatar */}
        <div className="flex-shrink-0 pl-24">
          <div
            ref={el => {
              avatarAnimRef.current = el;
              if (parentAvatarRef) parentAvatarRef.current = el;
            }}
            style={{ width: 360, height: 360 }}
          >
            <PixelTransition
              firstContent={
                <img
                  src= "/images/about/foto_1.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "50%",
                    display: "block"
                  }}
                  alt="Hero"
                />
              }
              secondContent={
                <img
                  src="/images/about/foto_2.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "50%",
                    display: "block"
                  }}
                  alt="Hero"
                />
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="w-full h-full"
              aspectRatio="100%"
              style={{
                width: 400,
                height: 400,
                borderRadius: "50%",
                overflow: "hidden"
              }}
              // Tambahan prop agar animasi pixel jalan otomatis!
              active={showPixelTransition}
            />
          </div>
        </div>
        {/* Kolom Tulisan */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl text-white">
          <h1 ref={helloRef} className="text-5xl mb-3">Hello!</h1>
          <h2 ref={nameRef} className="text-2xl mb-8">I'm Leonard</h2>
          <p ref={descRef}>
            I am a System Information undergraduate specializing in full-stack web development, with skills in front-end, back-end, WordPress, and UI/UX design. I enjoy building digital products, learning new technologies, and collaborating to solve real-world problems. Currently, I’m interested in software engineering, data, and cybersecurity. Welcome to my portfolio!
          </p>
          <div ref={socialRef} className="flex md:gap-20 mt-8">
            <a href="https://github.com/LeonArif" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </a>
            <a href="https://www.instagram.com/leonarifs/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/in/leon-arif-b743b52a7/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}