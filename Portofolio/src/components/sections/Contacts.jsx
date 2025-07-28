
export default function Contacts() {
    return (
        <>
        <div id="contacts" className="bg-black flex items-center justify-center text-white flex-col gap-2 p-14">
            <h1 className="font-bold text-3xl pb-8">Contacts</h1>
            <div className="w-full max-w-4xl grid grid-cols-2 grid-rows-2 gap-6">
                {/* Kiri Atas */}
                <div className="bg-yellow-400 rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                <h2 className="font-bold text-xl mb-2">WhatsApp</h2>
                <p>+62 82111464025</p>
                </div>
                {/* Kanan Atas */}
                <div className="bg-yellow-400 rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                <h2 className="font-bold text-xl mb-2">Email</h2>
                <p>leouwse@gmail.com</p>
                </div>
                {/* Kiri Bawah */}
                <div className="bg-yellow-400 rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                <h2 className="font-bold text-xl mb-2">Instagram</h2>
                <a href="https://www.instagram.com/leonarifs/">@leonarifs</a>
                </div>
                {/* Kanan Bawah */}
                <div className="bg-yellow-400 rounded-xl flex flex-col justify-center items-center py-8 px-4 shadow-lg text-black">
                <h2 className="font-bold text-xl mb-2">LinkedIn</h2>
                <a href="https://www.linkedin.com/in/leon-arif-b743b52a7/">Leon Arif</a>
                </div>
            </div>
            </div>
        </>
    )
}