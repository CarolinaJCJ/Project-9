import { FaUserCheck, FaChartPie, FaCalendar } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col gap-6">
      <h2 className="text-xl font-bold">Attendance</h2>

      <nav className="flex flex-col gap-4">
        <a className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaChartPie /> Dashboard
        </a>

        <a className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaUserCheck /> Asistencia
        </a>

        <a className="flex items-center gap-3 hover:text-blue-400 cursor-pointer">
          <FaCalendar /> Calendario
        </a>
      </nav>
    </aside>
  );
}