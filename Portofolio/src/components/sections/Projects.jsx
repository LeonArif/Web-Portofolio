export default function Projects() {
  // Mudah ditambah, cukup tambahkan objek baru!
  const projects = [
    {
      img: "src/assets/new_arc.jpg",
      title: "Hi,",
      desc: "Ini adalah proyek pertama. Deskripsi singkat tentang proyek ini.",
    },
    {
      img: "src/assets/new_arc.jpg",
      title: "Hello!",
      desc: "Proyek kedua dengan fitur unik dan inovatif.",
    },
    {
      img: "src/assets/new_arc.jpg",
      title: "Welcome!",
      desc: "Proyek ketiga, solusi teknologi modern.",
    },
    
    // Tambahkan project baru cukup dengan objek di sini!
  ];

  return (
    <div id="projects" className="scroll-mt-24 min-h-screen w-full py-16 px-0">
      <div>
        <h1 className="text-5xl font-bold text-white text-center pb-20">Projects</h1>
      </div>
      <div className="mx-auto w-full max-w-none">
        <div
          className="
            grid grid-cols-1 md:grid-cols-3
            gap-12
            w-full
            px-4 md:px-12
          "
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="
                flex flex-col items-start     // <-- ubah di sini!
                justify-start
                bg-[#FFD700]
                rounded-2xl
                shadow-xl
                w-full
                h-[420px]
                max-w-[500px]
                mx-auto
                p-8
                transition-transform duration-300
                hover:scale-105 hover:shadow-2xl
              "
            >
              <div className="w-full h-48 rounded-xl overflow-hidden bg-white flex items-center justify-center mb-5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2 text-left">{project.title}</h2>
              <p className="text-white text-lg text-left">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}