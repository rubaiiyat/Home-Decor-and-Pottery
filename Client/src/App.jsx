import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Outlet } from "react-router";
function App() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="min-h-[calc(100vh-100px)] mx-24">
        <Outlet></Outlet>
      </main>
      <footer>
        <div className="text-4xl">This is footer</div>
      </footer>
    </div>
  );
}

export default App;
