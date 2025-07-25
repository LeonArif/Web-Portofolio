import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const titleDescRef = useRef(null);

  const projects = [
    { img: "src/assets/new_arc.jpg", title: "Hi,", desc: "Deskripsi singkat." },
    { img: "src/assets/new_arc.jpg", title: "Hello!", desc: "Proyek kedua." },
    { img: "src/assets/new_arc.jpg", title: "Welcome!", desc: "Proyek ketiga." },
    { img: "src/assets/new_arc.jpg", title: "Hi,", desc: "Deskripsi singkat." },
    { img: "src/assets/new_arc.jpg", title: "Hello!", desc: "Proyek kedua." },
    { img: "src/assets/new_arc.jpg", title: "Welcome!", desc: "Proyek ketiga." },
  ];

  useEffect(() => {
    if (!sectionRef.current || !titleDescRef.current) return;
    gsap.set([titleDescRef.current, ".project-card"], { clearProps: "all" });
    gsap.set(".project-card", { opacity: 0, yPercent: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(titleDescRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out"
    })
    .to(
      ".project-card",
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.45,
        ease: "expo.out",
        stagger: {
          each: 0.15,
          from: "start"
        },
        // Hapus transform setelah animasi selesai
        onComplete: () => {
          document.querySelectorAll('.project-card').forEach(card => {
            card.style.transform = '';
          });
        }
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
      id="projects"
      className="scroll-mt-24 min-h-[60vh] w-full pb-28"
      ref={sectionRef}
    >
      <div ref={titleDescRef}>
        <h1 className="text-5xl font-bold text-center mb-4">Projects</h1>
        <p className="text-center mb-10 text-lg text-gray-600">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card flex flex-col bg-[#FFD700] rounded-2xl shadow-xl h-[350px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-full h-32 rounded-xl overflow-hidden bg-white flex items-center justify-center mb-3">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
              <p className="text-white text-base">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}