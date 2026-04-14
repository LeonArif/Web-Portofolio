import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap. registerPlugin(ScrollTrigger);

export default function Contacts() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (! sectionRef.current || !headerRef.current || !leftCardRef.current || ! rightCardRef.current) return;

    gsap.set([headerRef.current, leftCardRef.current, rightCardRef.current], { clearProps: "all" });
    gsap.set([leftCardRef.current, rightCardRef.current], { opacity: 0, y: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    tl.from(headerRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    })
    .to(
      leftCardRef.current,
      {
        y: 0,
        opacity:  1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      rightCardRef.current,
      {
        y:  0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData. email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:leouwse@gmail.com?subject=${subject}&body=${body}`;
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      ref={sectionRef}
      id="contacts"
      className="bg-black border-t border-white text-white py-20 px-6 md:px-16"
      style={{
        boxShadow: "0px -32px 64px 0px rgba(0,0,0,0.12)",
      }}
    >
      {/* Header with animation */}
      <div ref={headerRef} className="flex flex-col items-center justify-center mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacts</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Have a question or want to work together? Feel free to reach out through any of the channels below or send me a message directly.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-16 max-w-7xl mx-auto">
        
        {/* Sisi Kiri:  Info Kontak */}
        <div 
          ref={leftCardRef}
          className="w-full lg:w-1/2 bg-gray-900/50 p-10 rounded-2xl border border-gray-700 shadow-2xl flex flex-col"
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Get in touch
            </h2>
            <p className="text-gray-400 text-lg">
              Feel free to reach out through any of these channels.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 mt-8">
            <div className="group">
              <h3 className="font-bold text-xl mb-1 flex items-center gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 text-2xl" />
                WhatsApp
              </h3>
              <a 
                href="https://wa.me/6282111464025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition block"
              >
                +62 82111464025
              </a>
            </div>
            
            <div className="group">
              <h3 className="font-bold text-xl mb-1 flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-red-400 text-2xl" />
                Email
              </h3>
              <a 
                href="mailto: leouwse@gmail.com"
                className="text-gray-300 hover:text-white transition block"
              >
                leouwse@gmail.com
              </a>
            </div>
            
            <div className="group">
              <h3 className="font-bold text-xl mb-1 flex items-center gap-3">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-400 text-2xl" />
                Instagram
              </h3>
              <a 
                href="https://www.instagram.com/leonarifs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition block"
              >
                @leonarifs
              </a>
            </div>
            
            <div className="group">
              <h3 className="font-bold text-xl mb-1 flex items-center gap-3">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-400 text-2xl" />
                LinkedIn
              </h3>
              <a 
                href="https://www.linkedin.com/in/leon-arif-b743b52a7/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition block"
              >
                Leon Arif
              </a>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Form Email */}
        <div 
          ref={rightCardRef}
          className="w-full lg:w-1/2 bg-gray-900/50 p-10 rounded-2xl border border-gray-700 shadow-2xl flex flex-col"
        >
          <h2 className="text-3xl font-bold mb-2">Send me a message</h2>
          <p className="text-gray-400 text-lg mb-8">
            Feel free to message me through this form. 
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus: outline-none focus:border-white focus:ring-2 focus: ring-white/20 transition selection:bg-white selection:text-black"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition selection:bg-white selection:text-black"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="flex-1 flex flex-col">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus: outline-none focus:border-white focus:ring-2 focus: ring-white/20 transition resize-none selection:bg-white selection:text-black"
                placeholder="Write your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-4 bg-white hover:bg-gray-200 text-black font-bold text-lg rounded-lg transition duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}