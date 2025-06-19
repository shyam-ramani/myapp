import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen bg-blue-500 relative" style={{ backgroundColor: color }}>
     <div className="fixed  flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl">
        <button className="outline-none px-4  py-1 rounded-full bg-blue-400 text-white" onClick={() => setColor("blue")}>blue</button>
        <button className="outline-none px-4  py-1 rounded-full bg-blue-400 text-white" onClick={() => setColor("red")}>red</button>
        <button className="outline-none px-4  py-1 rounded-full bg-blue-400 text-white" onClick={() => setColor("green")}>green</button>
        <button className="outline-none px-4  py-1 rounded-full bg-blue-400 text-white" onClick={() => setColor("yellow")}>yellow</button>
        <button className="outline-none px-4  py-1 rounded-full bg-blue-400 text-white" onClick={() => setColor("black")}>black</button>
        
       
      </div>
     </div>
    </div>
  );
}

export default App;
