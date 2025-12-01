import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";

function Home() {
  const [data, setData] = useState(/** @type {string | null} */ (null));

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then(res => res.text())
      .then(info => setData(info));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/attendance")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Frontend conectado al Backend:</h1>
      <p className="mt-4 text-lg">{data}</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      } />
    </Routes>
  );
}

export default App;