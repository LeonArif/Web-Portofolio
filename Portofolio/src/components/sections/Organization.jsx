import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Organization() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const items = [
    {
      img: "/images/organization/hmif.png",
      title: "HMIF ITB",
      subtitle: "Himpunan Mahasiswa Informatika ITB",
      desc: "Member of HMIF ITB, community for ITB Informatics students",
    },
    {
      img:  "/images/organization/uro.png",
      title: "URO ITB",
      subtitle:  "Unit Robotika ITB",
      desc:  "Programmer Division in Viva La Ganesha (KRSRI) Robotic Team, focusing on learning and researching in SAR (Search and Rescue) Robotics"
    },
    {
      img: "/images/organization/arc.png",
      title: "ARC ITB",
      subtitle:  "Amateur Radio Club ITB",
      desc:  "Member in Amateur Radio Club ITB, focusing on learning and practicing software engineering"
    }
  ];

  useEffect(() => {
    if (! sectionRef.current || !headerRef.current) return;

    gsap.set([headerRef. current, ".org-card"], { clearProps: "all" });
    gsap.set(".org-card", { opacity: 0, x: 60, scale: 0.97 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef. current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headerRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
    })
    .to(
      ".org-card",
      {
        x: 0,
        opacity:  1,
        scale: 1,
        duration: 0.3,
        ease: "expo.out",
        stagger: {
          each: 0.1,
          from: "start"
        },
      },
      "+=0.1"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger. kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 md:px-8 flex flex-col py-20 items-center gap-10 md:gap-14 bg-black relative
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]
        after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent"
    >
      <div ref={headerRef} className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-white">Organizations</h1>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl px-4">Currently, I am actively involved in these organizations. </p>
      </div>
      
      <div className="w-full max-w-7xl space-y-8">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="
              org-card
              flex flex-col md:flex-row items-center
              w-full
              p-6 md: px-12 md:py-8
              rounded-2xl md:rounded-3xl
              transition-all duration-300
              bg-gray-900/50
              shadow-2xl
              hover:scale-[1.02] hover:border-white
              border border-gray-700
            "
          >
            {/* Image Section */}
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-10">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-white border-2 border-gray-700 flex items-center justify-center group-hover:border-white transition-all">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="flex flex-col flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-white">{item.title}</h2>
              <p className="text-base md:text-lg font-medium mb-1 text-gray-300">{item.subtitle}</p>
              <p className="text-sm md:text-base text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}