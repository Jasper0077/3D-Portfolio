import  { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Experience, Tech, Works, Contact, Feedbacks, StarsCanvas } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {/* TO BE REMOVED */}
      <div className="h-[1000px]"></div>
    </BrowserRouter>
  );
}

export default App;
