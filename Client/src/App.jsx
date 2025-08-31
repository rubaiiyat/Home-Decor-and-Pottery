import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Pages/Footer";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-100px)] ">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
