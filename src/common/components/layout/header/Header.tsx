export const Header = () => {
  return (
    <header className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">MiLogo</h1>

        {/* Navegación */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-blue-600">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
