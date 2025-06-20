import { useState } from "react";
function App() {
  const [color, setcolor] = useState("olive");
 
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2">
         <div className="flex flexwrap justify-center gap-5 rounded-full text-1.5xl px-4 py-2 m-5  bg-white  mx-356 ">

          <button className="rounded bg-red-500 rounded-full  px-4 py-2" onClick={() => setcolor("red")}>red</button>
          <button className="rounded bg-blue-500 rounded-full  px-4 py-2" onClick={() => setcolor("blue")}>blue</button>
          <button className="rounded bg-black  rounded-full px-4 py-2 text-white" onClick={() => setcolor("black")}>black</button>
          <button className="rounded bg-yellow-500 rounded-full  px-4 py-2" onClick={() => setcolor("yellow")  }>yellow</button>
          
         </div>

        </div>
    </div>
   
  );
}

export default App;
