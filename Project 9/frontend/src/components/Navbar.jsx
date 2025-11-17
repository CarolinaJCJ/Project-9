export default function Navbar() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">Carolina</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </header>
  );
}