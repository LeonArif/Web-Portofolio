import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Organization() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const items = [
    {
      img: "src/assets/new_arc.jpg",
      title: "Hi,",
      subtitle: "Selamat datang di organisasi kami!",
      desc: "Kami bergerak di bidang pengembangan teknologi dan inovasi. Bergabunglah untuk berkolaborasi dan tumbuh bersama."
    },
    {
      img: "src/assets/new_arc.jpg",
      title: "Hello!",
      subtitle: "Tim Kreatif & Kolaboratif",
      desc: "Kami selalu berinovasi demi kemajuan bersama. Bergabung dan jadi bagian dari perubahan positif."
    },
    {
      img: "src/assets/new_arc.jpg",
      title: "Welcome!",
      subtitle: "Komunitas Terbuka",
      desc: "Jadilah bagian dari komunitas yang mendukung pengembangan diri dan profesionalisme."
    }
  ];

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return;

    gsap.set([headerRef.current, ".org-card"], { clearProps: "all" });
    gsap.set(".org-card", { opacity: 0, x: 60, scale: 0.97 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headerRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })
    .to(
      ".org-card",
      {
        x: 0,
        opacity: 1,
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col -mt-64 items-center gap-14 min-h-[60vh] mb-12"
    >
      <div ref={headerRef}>
        <h1 className="text-5xl font-bold text-center mb-4">Organizations</h1>
        <p className="text-center mb-4" >my organization lol</p>
      </div>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="
            org-card
            group flex items-center
            w-full max-w-7xl
            px-12 py-8
            rounded-3xl
            transition-all duration-300
            bg-gradient-to-r from-[#d1d5db] via-[#FFD700]/20 to-white
            shadow-md
            hover:scale-105 hover:shadow-2xl
            border-2 border-[#FFD700]
          "
          style={{
            boxShadow: '0 4px 24px 0 rgba(32,32,32,0.18)',
          }}
        >
          {/* Image Section */}
          <div className="flex-shrink-0 mr-10">
            <div className="w-56 h-40 rounded-2xl overflow-hidden bg-gray-300 border-4 border-[#FFD700] flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="flex flex-col flex-1 text-black">
            <h2 className="text-3xl font-bold mb-2 text-[#222]">{item.title}</h2>
            <p className="text-lg font-medium mb-1 text-[#FFD700]">{item.subtitle}</p>
            <p className="text-base text-[#222]">{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="mt-14"
        style={{
          height: '2px',
          width: '80%',
          borderRadius: '4px',
          background: 'linear-gradient(90deg, rgba(255,180,0,0) 0%, #FFD700 20%, #222 50%, #FFD700 80%, rgba(255,215,0,0) 100%)',
        }}
      />
    </div>
  );
}