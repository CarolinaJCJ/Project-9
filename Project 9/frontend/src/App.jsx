import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then(res => res.text())
      .then(info => setData(info));
  }, []);

  fetch("http://localhost:4000/api/attendance")
  .then(res => res.json())
  .then(data => console.log(data));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Frontend conectado al Backend:</h1>
      <p className="mt-4 text-lg">{data}</p>
    </div>
  );
}

export default App;
