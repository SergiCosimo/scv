export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white p-3 flex justify-between items-center 
    ">
      <h1 className="xl:text-xl text-sm">Web Curriculum</h1>
      <nav>
        <ul className="flex gap-4">
          <li><a href="#" className="hidden sm:block hover:underline text-white">Home</a></li>
          <li><a href="#" className="hidden  sm:block hover:underline text-white">Chi siamo</a></li>
          <li><a href="#" className="hidden  sm:block hover:underline text-white">Contatti</a></li>
          <li><a href="#" className="hidden  sm:block hover:underline text-white">Prova</a></li>
        </ul>
      </nav>
    </header>
  );
}

// sm:block