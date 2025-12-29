import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const titleDescRef = useRef(null);
  const popupRef = useRef(null);
  const backdropRef = useRef(null);
  const [openProject, setOpenProject] = useState(null);

  const projects = [
    {
      img:  "/images/project/stressdew.png",
      title: "Stressdew Valley",
      desc: "Final project for Object Oriented Programming Class",
      detail: "A Stardew Valley clone developed by a team of five using Java and Java Swing for the GUI. The game features core mechanics such as fishing, planting, and more, offering players a simplified farming simulation experience.",
      tools: ["Java", "Github", "Java Swing"]
    },
    {
      img: "/images/project/adauang.png",
      title: "AdaUang",
      desc: "Final project for Software Engineering Class",
      detail: "A loan tracking application developed by a team of six using Java.  The app includes features such as authentication, financial report generation, monthly payment tracking, contract management, and more, providing users with comprehensive loan oversight tools.",
      tools: ["Java", "Github", "Java Swing"]
    },
    {
      img: "/images/project/iitproyek.png",
      title: "IIT Project",
      desc:  "Internship Project for IIT Tech Department",
      detail: "A project management web application built by a team of three using React, Node.js, TypeScript, SQL, Drizzle, and GitHub.  The website enables users to submit and manage their own personal projects efficiently, featuring task tracking, collaboration tools, and automated workflows.",
      tools: ["React", "Github", "Node.js", "TypeScript", "SQL", "Drizzle"]
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !titleDescRef.current) return;
    gsap.set([titleDescRef.current, ".project-card"], { clearProps: "all" });
    gsap.set(".project-card", { opacity: 0 });

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
      duration: 0.3,
      ease: "power3.out"
    })
    .to(
      ".project-card",
      {
        yPercent: 0,
        opacity: 1,
        duration:  0.2,
        ease: "expo.out",
        stagger: {
          each: 0.15,
          from: "start"
        },
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

  const handleClose = () => {
    if (! popupRef.current || !backdropRef.current) return;
    
    // Animate close
    gsap.to(popupRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in"
    });
    
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration:  0.25,
      ease: "power2.in",
      onComplete: () => {
        setOpenProject(null);
      }
    });
  };

  const onBackdropClick = (e) => {
    if (e.target.id === "project-modal-backdrop") handleClose();
  };

  // Animasi popup - langsung fade + scale
  useEffect(() => {
    if (!openProject || ! popupRef.current || !backdropRef.current) return;
    const popup = popupRef.current;
    const backdrop = backdropRef.current;

    // Set initial state
    gsap.set(backdrop, { opacity: 0 });
    gsap.set(popup, {
      scale: 0.8,
      opacity: 0,
    });

    // Animate backdrop
    gsap.to(backdrop, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out"
    });

    // Animate popup - fade in + scale up dengan bounce
    gsap.to(popup, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, [openProject]);

  const handleCardClick = (project) => {
    setOpenProject(project);
  };

  return (
    <section
      id="projects"
      className="py-20 w-full px-4 md:px-8 mb-20 flex flex-col bg-black"
      ref={sectionRef}
    >
      <div ref={titleDescRef} className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-white">Projects</h1>
        <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
          Take a look at some of the projects I've built and contributed to. 
        </p>
      </div>
      
      <div className="gradient-border-hover mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card flex flex-col border border-gray-700 bg-gray-900/50 rounded-2xl shadow-2xl min-h-[350px] md:h-[400px] p-5 md:p-6 transition-all duration-300 hover: scale-[1.02] hover:border-white hover:shadow-white/10 cursor-pointer"
              onClick={() => handleCardClick(project)}
            >
              <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden bg-white flex border-2 border-gray-700 items-center justify-center mb-3">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">{project.title}</h2>
              <p className="text-gray-300 text-sm md:text-base mb-2 flex-grow">{project.desc}</p>
              
              <div className="flex flex-col mt-auto">
                <p className="text-gray-400 text-xs md:text-sm mb-3 font-semibold italic">Click for more details... </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools && project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block px-2 md:px-3 py-1 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {openProject && (
        <div
          ref={backdropRef}
          id="project-modal-backdrop"
          onClick={onBackdropClick}
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4"
        >
          <div
            ref={popupRef}
            className="relative bg-gray-900 border-2 border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="sticky top-4 left-[calc(100%-3rem)] z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 text-black font-bold transition-all shadow-lg hover:scale-110 mb-[-2.5rem]"
            >
              ✕
            </button>

            {/* Content */}
            <div className="p-6 md:p-8 pt-8">
              {/* Image */}
              <div className="w-full h-48 md:h-72 rounded-xl overflow-hidden border-2 border-gray-700 bg-white flex items-center justify-center mb-4 md:mb-6">
                <img src={openProject.img} alt={openProject.title} className="w-full h-full object-cover" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">{openProject.title}</h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">{openProject.detail}</p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700">
                {openProject.tools && openProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 text-sm font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}