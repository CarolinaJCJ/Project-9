import { useEffect, useState } from "react";

export default function AttendanceTable() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/attendance")
      .then(res => res.json())
      .then(data => setAttendance(data));
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Registro de Asistencia</h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">Nombre</th>
            <th className="py-2">Fecha</th>
            <th className="py-2">Estado</th>
          </tr>
        </thead>
        
        <tbody>
          {attendance.map(item => (
            <tr key={item._id} className="border-b">
              <td className="py-2">{item.nombre}</td>
              <td className="py-2">{item.fecha}</td>
              <td className="py-2">
                <span className={`px-3 py-1 rounded-full text-white ${
                  item.estado === "Presente" ? "bg-green-500" : "bg-red-500"
                }`}>
                  {item.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}