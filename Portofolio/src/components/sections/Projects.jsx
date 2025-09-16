import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Projects({ visible }) {
  const sectionRef = useRef(null);
  const titleDescRef = useRef(null);
  const popupRef = useRef(null);
  const [openProject, setOpenProject] = useState(null);
  const [modalAnimData, setModalAnimData] = useState(null);

  const projects = [
    {
      img: "/images/project/stressdew.png",
      title: "Stressdew Valley",
      desc: "Final project for Object Oriented Programming Class",
      detail: "A Stardew Valley clone developed by a team of five using Java and Java Swing for the GUI. The game features core mechanics such as fishing, planting, and more, offering players a similar farming and life simulation experience. All gameplay elements and interface were built collaboratively, demonstrating teamwork and strong Java programming skills.",
      tools: ["Java", "Github", "Java Swing"]
    },
    {
      img: "/images/project/adauang.png",
      title: "AdaUang",
      desc: "Final project for Software Engineering Class",
      detail: "A loan tracking application developed by a team of six using Java. The app includes features such as authentication, financial report generation, monthly payment tracking, contract viewing, and more. It implements role-based access for admin, user, and staff, with each role accessing different sets of features. This project showcases strong collaboration and practical implementation of user management and financial tracking systems.",
      tools: ["Java", "Github", "Java Swing"]
    },
    {
      img: "/images/project/iitproyek.png",
      title: "IIT Project",
      desc: "Internship Project for IIT Tech Department",
      detail: "A project management web application built by a team of three using React, Node.js, TypeScript, SQL, Drizzle, and GitHub. The website enables users to submit and manage their own personal project requests, including specifying requirements and tracking project progress. This platform streamlines the process of collecting user specifications and managing project workflows efficiently.",
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
          duration: 0.45,
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
    setOpenProject(null);
    setModalAnimData(null);
  };

  const onBackdropClick = (e) => {
    if (e.target.id === "project-modal-backdrop") handleClose();
  };

  useEffect(() => {
    if (!openProject || !modalAnimData || !popupRef.current) return;
    const popup = popupRef.current;

    gsap.set(popup, {
      position: "fixed",
      left: modalAnimData.left,
      top: modalAnimData.top,
      width: modalAnimData.width,
      height: modalAnimData.height,
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
    });

    gsap.to(popup, {
      duration: 0.5,
      ease: "expo.out",
      left: "50%",
      top: "50%",
      x: "-50%",
      y: "-50%",
      width: 700,
      height: 700,
      onComplete: () => {
        gsap.to(popup, { scale: 1, duration: 0.2, ease: "expo.out" });
      }
    });
  }, [openProject, modalAnimData]);

  const handleCardClick = (project, idx) => {
    const card = document.querySelectorAll('.project-card')[idx];
    const rect = card.getBoundingClientRect();
    setModalAnimData({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    });
    setOpenProject(project);
  };

  return (
    <div
      id="projects"
      className="scroll-mt-24 min-h-[60vh] w-full pb-28 flex flex-col"
      ref={sectionRef}
      style={{
        display: visible ? "flex" : "none"
      }}
    >
        <div ref={titleDescRef}>
          <h1 className="text-5xl font-semibold text-center mb-4">Projects</h1>
          <p className="text-center mb-14 text-lg">
            Take a look at some of the projects I've built and contributed to.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card flex flex-col border border-black bg-[#FFD700] rounded-2xl shadow-xl h-[400px] p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCardClick(project, idx)}
              >
                <div className="w-full h-40 rounded-xl overflow-hidden bg-white flex border border-black items-center justify-center mb-3">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-semibold text-black mb-1">{project.title}</h2>
                <p className="text-black text-base mb-2">{project.desc}</p>
                {/* Tools badges */}
                <div className="flex flex-col mt-auto">
                  <p className="text-black text-base mb-4 font-semibold italic"> Click for more description...</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tools && project.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-block px-3 py-1 rounded-lg bg-white/80 text-black text-xs font-semibold"
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
            id="project-modal-backdrop"
            onClick={onBackdropClick}
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center"
          >
            <div
              ref={popupRef}
              className="relative bg-yellow-400 border-2 border-black rounded-2xl shadow-2xl w-full max-w-xl p-6 flex flex-col h-[700px]"
              style={{ opacity: 0 }}
            >
              <div className="w-full h-72 rounded-xl overflow-hidden border-2 border-black bg-gray-200 flex items-center justify-center mb-2">
                <img src={openProject.img} alt={openProject.title} className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-semibold text-black">{openProject.title}</h2>
              <p className="mt-10 text-black">{openProject.detail}</p>
              {/* Spacer agar badge di bawah */}
              <div className="flex-grow"></div>
              <div className="flex flex-wrap gap-2 mt-4">
                {openProject.tools && openProject.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 rounded-lg bg-white/80 text-black text-xs font-semisemibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
  );
}