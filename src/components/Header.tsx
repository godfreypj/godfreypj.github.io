// src/components/Header.tsx

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">My App</div>
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
          >
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
