import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Create from "./components/Create";
import { ResumeContextProvider } from "./context/resumeContext";

function App() {
  return (
    <ResumeContextProvider>
      <BrowserRouter>
        <body className="dark:text-slate-100 dark:bg-[#111] text-[#111] min-h-screen duration-300">
          <Navbar />

          <div className="flex justify-center items-start">
            <div className="w-full lg:px-20 md:px-10 px-5">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/create" element={<Create />} />
              </Routes>
            </div>
          </div>
        </body>
      </BrowserRouter>
    </ResumeContextProvider>
  );
}

export default App;
