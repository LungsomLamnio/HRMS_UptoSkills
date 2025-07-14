import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Events from "./components/Event3";
import "/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100vw" }}>
      <Sidebar />
      
      <div className="main-content">
        <Routes>
          <Route path="/event" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
