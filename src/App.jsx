import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Events from "./components/Events";
import "/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/event" element={<Events />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
