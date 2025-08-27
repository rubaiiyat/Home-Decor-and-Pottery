import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Pages/Footer";
import Carousel from "./Components/Pages/Carousel";
function App() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <Carousel></Carousel>
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
