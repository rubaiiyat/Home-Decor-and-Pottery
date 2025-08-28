import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Pages/Footer";
import SliderComponent from "./Components/Pages/SliderComponent";
function App() {
  return (
    <div>
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
