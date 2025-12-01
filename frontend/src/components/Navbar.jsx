export default function Navbar() {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">

        {/* Título */}
        <h1 className="text-xl font-semibold tracking-wide">
          Registro de Actividad
        </h1>

        {/* Perfil */}
        <div className="flex items-center gap-3">
          <span className="font-medium text-gray-700">Carolina</span>

          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
        </div>

      </div>
    </header>
  );
}