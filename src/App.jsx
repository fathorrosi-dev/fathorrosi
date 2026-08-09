import { Route, Routes } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { ScrollToHash } from "@/components/ScrollToHash";
import { Home } from "@/pages/Home";
import { Process } from "@/pages/Process";
import { Faq } from "@/pages/Faq";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
