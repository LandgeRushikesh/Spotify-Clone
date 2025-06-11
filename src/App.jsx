import { useState } from "react";
import Navbar from "./Components/Header/Navbar";
import MainSection from "./Components/MainSection/MainSection";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="main-container bg-black text-white w-[100%] min-h-screen ">
        <header className="px-4 py-2">
          <Navbar />
        </header>
        <main className="flex gap-4 mx-4">
          <div className="flex-[1] py-6 px-4 bg-[#4442424d] rounded-md">
            <Sidebar />
          </div>
          <div className="flex-[3] py-6 px-4 bg-[#4442424d] rounded-md">
            <MainSection />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
