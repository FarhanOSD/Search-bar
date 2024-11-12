import React from 'react'
import Sharch from './components/Sharch';
import AdvanceSearch from './components/AdvanceSearch';



function App() {
  
  return (
    <div className="h-[20000px] bg-slate-500 p-10 text-center border-10 text-black ">
      <div className=" h-[2000px] bg-slate-500 p-10 mt-5 text-center  ">
        
        <AdvanceSearch/>
      </div>
    </div>
  );
}

export default App