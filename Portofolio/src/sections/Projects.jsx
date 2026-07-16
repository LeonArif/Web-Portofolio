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
    // template
    // {
    //   img:"/images/project/codex.png",
    //   title:"",
    //   desc:"",
    //   detail:"",
    //   links:[],
    //   tools:[]
    // }
    {
      img:  "/images/project/stressdew.png",
      title: "Stressdew Valley",
      desc: "Final project for Object Oriented Programming Class",
      detail: "A Stardew Valley clone developed by a team of five using Java and Java Swing for the GUI. The game features core mechanics such as fishing, planting, and more, offering players a simplified farming simulation experience.",
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/Stressdew-Valley" },
      ],
      tools: ["Java", "Github", "Java Swing"]
    },
    {
      img: "/images/project/adauang.png",
      title: "AdaUang",
      desc: "Final project for Software Engineering Class",
      detail: "A loan tracking application developed by a team of six using Java.  The app includes features such as authentication, financial report generation, monthly payment tracking, contract management, and more, providing users with comprehensive loan oversight tools.",
      links: [
          { label: "GitHub", href: "https://github.com/LeonArif/IF2050-2025-K3J-AdaUang" },
      ],
      tools: ["Java", "Github", "Java Swing"]
    },
    {
      img: "/images/project/iitproyek.png",
      title: "IIT Project",
      desc:  "Internship Project for IIT Tech Department",
      detail: "A project management web application built by a team of three using React, Node.js, TypeScript, SQL, Drizzle, and GitHub.  The website enables users to submit and manage their own personal projects efficiently, featuring task tracking, collaboration tools, and automated workflows.",
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/iit-management" },
      ],
      tools: ["React", "Github", "Node.js", "TypeScript", "SQL", "Drizzle"]
    },
    {
      img: "/images/project/battlecode.jpeg",
      title: "BattleCode",
      desc:  "Made A Battlecode Robot as a project for Strategy Algorithm",
      detail: (
        <>
          BattleCode is an annual MIT programming competition where teams develop AI bots to compete in a strategy game environment.<br />
          <b>GreedyPainter:</b> Focuses on painting the most tiles each turn using a greedy strategy.<br />
          <b>GreedyExpansion:</b> Expands territory by always moving to the nearest unclaimed area, prioritizing shortest distance.<br />
          <b>GPBSM (Main Bot):</b> Combines multiple evaluation metrics and picks the action with the highest calculated greedy score each turn.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/Tubes1_STIma" },
      ],
      tools: ["Java", "Gradle", "Github"]
    },
    {
      img: "/images/project/codex.png",
      title: "CodeX",
      desc: "Interactive programming learning platform with real-time code execution",
      detail: (
        <>
          An interactive web-based learning platform for programming languages. It features an in-browser Python code runner for real-time feedback, an automated progress tracking system integrated with Supabase, and secure JWT-based authentication via Google OAuth.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/CodeX-PAWM" },
        { label: "Website Link", href: "https://code-x-pawm.vercel.app/" },
      ],
      tools: ["Next.js", "Express.js", "Supabase", "Google OAuth", "JWT", "Tailwind CSS"]
    },
    {
      img: "/images/project/sekuroweb.png",
      title: "Sekuro 18 Web App",
      desc: "Centralized information hub and timeline platform for robotics orientation",
      detail: (
        <>
          A web application designed as a centralized information hub and timeline tracker for a multi-week robotics organization orientation. Built using Next.js and integrated with Supabase for robust backend services, providing participants with seamless access to event schedules, announcements, and key resources.
        </>
      ),
      links: [
        { label: "Website Link", href: "https://sekuro2026.vercel.app/" },
        { label: "GitHub", href: "https://github.com/19623248Git/sekuro-web-app" },
      ],
      tools: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      img: "/images/project/supplychain.png",
      title: "SupplyChain",
      desc: "Supply-chain prototype integrating optimization algorithms and cryptographic modules",
      detail: (
        <>
          A full-stack supply-chain simulation featuring a Go backend and a React + Vite (TypeScript) frontend. It includes an <b>Algorithm Lab</b> to compare and visualize Dynamic Programming vs. Greedy heuristics for route optimization, alongside a custom <b>cryptography module</b> featuring SHA-256 hashing, ECDSA signatures, and a basic blockchain for tamper detection.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/SupplyChain" },
      ],
      tools: ["Golang",  "React", "TypeScript", "Vite", "ECDSA", "Algorithms"]
    },
    {
      img: "/images/project/chadzapp.png",
      title: "ChaDZapp",
      desc: "Secure web chat application with end-to-end cryptography and JWT authentication",
      detail: (
        <>
          A secure, containerized web chat application developed in a team of three. It features robust <b>cryptographic protocols</b> including ECDH and HKDF for key exchange, AES-256 for message encryption/decryption, and custom JWT-based authentication. The FastAPI backend acts as a zero-knowledge intermediary that never stores or accesses raw communication keys.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/Tugas3_ChaDZapp" },
        { label: "Website Link", href: "https://tugas3-cha-d-zapp-ecqj6045b-leons-projects-88e3bd87.vercel.app/login"}
      ],
      tools: ["FastAPI", "React", "TypeScript", "ECDH", "AES-256", "JWT", "Docker"]
    },
    {
      img: "/images/project/rustdz.png",
      title: "DOM CSS Selector Traversal",
      desc: "HTML DOM parsing and traversal visualization using BFS & DFS algorithms",
      detail: (
        <>
          A full-stack application that parses any web page's HTML into an internal tree structure and visualizes DOM traversal using <b>BFS and DFS algorithms</b>. Built with a high-performance <b>Rust (Axum/Tokio)</b> backend for rapid parsing and concurrent execution analysis, paired with a React and TypeScript frontend for real-time interactive tree visualization.
        </>
      ),
      links: [
        { label: "Website Link", href: "https://tubes2-rust-dz.vercel.app/" },
        { label: "GitHub", href: "https://github.com/LeonArif/Tubes2_RustDz" },
      ],
      tools: ["Rust", "Axum", "React", "TypeScript", "Vite", "Docker", "Algorithms"]
    },
    {
      img: "/images/project/jalalove.png", // Sesuaikan dengan path gambar aslimu
      title: "Judol Detector",
      desc: "Chrome extension utilizing parallel string-matching algorithms and OCR to detect illicit content",
      detail: (
        <>
          A real-time Chrome Extension developed in a team of three to detect and blur illicit gambling content. It runs <b>six string-matching and pattern recognition algorithms in parallel</b> (including KMP, Boyer-Moore, Aho-Corasick, Rabin-Karp, and Weighted Levenshtein Fuzzy Matching) on web text, while leveraging <b>Tesseract.js OCR</b> to scan and blur text embedded within images.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/suryasuharna23/Tubes3_Jalalove" },
      ],
      tools: ["TypeScript", "Chrome Extension API", "Vite", "Tesseract.js", "Algorithms", "Manifest V3"]
    },
    {
      img: "/images/project/jeopardy.png", // Sesuaikan dengan path gambar aslimu
      title: "Jeopardy Platform",
      desc: "Interactive real-time quiz platform with live synchronization and secure host controls",
      detail: (
        <>
          A full-stack, real-time Jeopardy platform built with <b>Next.js (App Router)</b> and <b>Firebase</b>. It features live state synchronization for a game host dashboard and players' buzzer interfaces via Firestore, coupled with secure role-based access control (RBAC) and Firebase Security Rules to prevent unauthorized client modifications.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/jeopardy" }, // Sesuaikan jika reponya berbeda
      ],
      tools: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS", "Real-time Database"]
    },
    {
      img: "/images/project/freshguard.png", // Sesuaikan dengan path gambar aslimu
      title: "FreshGuard",
      desc: "IoT & AI-powered smart food freshness detection system with real-time predictions",
      detail: (
        <>
          An end-to-end intelligent IoT system developed to predict food spoilage in real-time. The system triggers an <b>ESP32 microcontroller</b> via cloud polling (Supabase) to read multi-sensor data (BME280 & MQ-135), processes the telemetry through a custom-trained <b>XGBoost machine learning model</b>, and serves real-time freshness classifications (FRESH/WARN/SPOILED) on a React dashboard.
        </>
      ),
      links: [
        { label: "GitHub", href: "https://github.com/LeonArif/Reksti_FreshGuard" },
        { label: "Website Link", href: "https://reksti-fresh-guard.vercel.app/" },
      ],
      tools: ["React", "Node.js", "Express", "Supabase", "Python", "XGBoost", "ESP32", "IoT"]
    },
    {
      img: "/images/project/resistdz.png", // Sesuaikan dengan path gambar aslimu
      title: "resistDZ",
      desc: "Healthcare ML platform for Antimicrobial Resistance (AMR) prediction and prediction schema validation",
      detail: (
        <>
          A full-stack healthcare web application designed to predict <b>Antimicrobial Resistance (AMR)</b> patterns. It pairs a React + Vite frontend with a Flask (Python) backend engineered to load and execute pre-trained machine learning pipelines (Histogram-based Gradient Boosting/XGBoost) for tabular classification, featuring a structured schema validator for input safety.
        </>
      ),
      links: [
        { label: "Website Link", href: "https://tubes2-rust-dz.vercel.app/" }, // Ganti jika ada link khusus resistDZ
        { label: "GitHub", href: "https://github.com/LeonArif/resistDZ" }, // Sesuaikan dengan repo aslimu jika berbeda
      ],
      tools: ["Flask", "React", "TypeScript", "Python", "Scikit-learn", "XGBoost", "Vercel"]
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

              {openProject.links && openProject.links.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {openProject.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-lg border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03] hover:bg-gray-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              
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