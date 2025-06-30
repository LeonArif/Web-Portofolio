import PixelTransition from './../../animations/effects/PixelTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
    <div className="bg-gray-800">
      {/* Section Home */}
      <div
        id="home"
        className="flex flex-col lg:flex-row justify-between items-center py-40 text-white px-4 lg:px-16"
      >
        {/* Kiri - Tulisan */}
        <div className="flex-1 max-w-4xl px-4 md:px-10 mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Leonard Arif Sutiono</h1>
          <h2 className="text-2xl mb-8">Software Engineer</h2>
          <p className="mb-12">
            Hello, I’m Leonard — a Software Engineer with a strong focus on full-stack web development. I love crafting high-quality digital products, learning new technologies, and collaborating with others to solve real-world problems. Welcome to my portfolio!
          </p>
          <div className="flex gap-8 md:gap-16">
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

        {/* Kanan - Gambar dengan PixelTransition */}
        <div className="flex-1 max-w-xs md:max-w-md lg:max-w-lg flex justify-center">
          <PixelTransition
            firstContent={
              <img
                src="src/assets/new_arc.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
                alt="Hero"
              />
            }
            secondContent={
              <img
                src="src/assets/new_arc.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "16px" }}
                alt="Hero"
              />
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card w-[250px] h-[250px] md:w-[320px] md:h-[320px] lg:w-[370px] lg:h-[370px]"
          />
        </div>
      </div>

      {/* SVG Wave di bawahnya */}
        <div className="w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-32 md:h-40"
            preserveAspectRatio="none"
          >
            {/* Gelombang atas (lebih transparan) */}
            <path
              d="M0,120 Q360,60 720,120 T1440,120 L1440,220 L0,220 Z"
              fill="#a78bfa"
              opacity="0.3"
            />
            {/* Gelombang bawah (warna lebih kuat) */}
            <path
              d="M0,160 Q360,100 720,160 T1440,160 L1440,220 L0,220 Z"
              fill="#7c3aed"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </>
  );
}