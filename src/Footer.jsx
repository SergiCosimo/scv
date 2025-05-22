function Footer() {
    return (
        <div className="justify-items-center">
            <footer className=" w-[99vw]
     bg-gray-800 text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} Tutti i diritti riservati.</p>
                <ul className="mt-2 flex justify-center space-x-4">
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">Termini</a></li>
                    <li><a href="#" className="hover:underline">Contatti</a></li>
                </ul>
          
            </footer>
        </div>
    );
}

export default Footer;
