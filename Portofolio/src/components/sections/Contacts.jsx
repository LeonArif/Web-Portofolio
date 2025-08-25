import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {
    return (
        <div id="contacts" className="bg-yellow-400 border border-black flex items-center justify-center text-black flex-col gap-2 p-14 mt-32" 
            style={{
            boxShadow: "0px -32px 64px 0px rgba(0,0,0,0.12)",
            borderRadius: "0 0 48px 48px"
        }}>
            <h1 className="font-semiold text-3xl pb-8">Contacts</h1>
            <div className="w-full max-w-4xl grid grid-cols-2 grid-rows-2 gap-6">
                {/* WhatsApp */}
                <div className="bg-white border border-black rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                    <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faWhatsapp} />
                        WhatsApp
                    </h2>
                    <p>+62 82111464025</p>
                </div>
                {/* Email */}
                <div className="bg-white border border-black rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                    <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email
                    </h2>
                    <p>leouwse@gmail.com</p>
                </div>
                {/* Instagram */}
                <div className="bg-white border border-black rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                    <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faInstagram} />
                        Instagram
                    </h2>
                    <a href="https://www.instagram.com/leonarifs/">@leonarifs</a>
                </div>
                {/* LinkedIn */}
                <div className="bg-white border border-black rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                    <h2 className="font-bold text-xl mb-2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </h2>
                    <a href="https://www.linkedin.com/in/leon-arif-b743b52a7/">Leon Arif</a>
                </div>
            </div>
        </div>
    );
}