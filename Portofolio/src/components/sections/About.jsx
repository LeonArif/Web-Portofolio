import { useRef, useEffect, useState } from "react";
import PixelTransition from './../../animations/effects/PixelTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from '../../assets/new_arc.jpg';

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
    <div id="about" className="scroll-mt-24" ref={aboutSectionRef}>
      <div>
        <h1 ref={titleRef} className="text-5xl text-center text-white">About Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center py-32 lg:px-32 justify-between">
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
                  src={heroImg}
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
                  src={heroImg}
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
                width: 360,
                height: 360,
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
          <h1 ref={helloRef} className="text-5xl font-bold mb-3">Hello!</h1>
          <h2 ref={nameRef} className="text-2xl mb-8">I'm Leonard</h2>
          <p ref={descRef}>
            A System Information Undergraduate with a strong focus on full-stack web development.
            I love crafting high-quality digital products, learning new technologies, and collaborating with others to solve real-world problems. Welcome to my portfolio!
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
      {/* Garis bawah dengan efek fading */}
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
    </div>
  );
}