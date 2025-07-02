import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { SideBar } from "./Components/SideBar";
import { Home } from "./Components/Home";
import { Footer } from "./Components/Footer";
const App = () => {
  const [activeBar, setActiveBar] = useState(false);
  const [activeModal, setActiveModal] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState("home"); // home, login, signup

  if (currentPage === "login") {
    return <Login />;
  }

  if (currentPage === "signup") {
    return <Signup />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeBar={activeBar} setActiveBar={setActiveBar} />
      <SideBar 
        activeBar={activeBar} 
        setActiveBar={setActiveBar} 
        activeModal={activeModal} 
        setActiveModal={setActiveModal} 
      />
      <Home activeBar={activeBar} activeModal={activeModal} />
      <Footer activeBar={activeBar} />
    </div>
  );
};

export default App;
          