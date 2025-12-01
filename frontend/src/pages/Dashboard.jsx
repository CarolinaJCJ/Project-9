import StatCard from "../components/StatCard";
import AttendanceTable from "../components/AttendanceTable";

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Presentes" value="24" />
        <StatCard title="Ausentes" value="6" />
        <StatCard title="Total" value="30" />
      </div>

      <AttendanceTable />
    </div>
  );
}