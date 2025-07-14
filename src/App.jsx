import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import "/src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Event2 from "./components/Events2";
import Event1 from "./components/Event1";
import Event3 from "./components/Event3";

function App() {
  return (
    <div className="d-flex" style={{ height: "100vh", width: "100vw" }}>
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <Routes>
          <Route path="/event" element={<Event1 />} />
          <Route path="/event/schedule" element={<Event2 />} />
          <Route path="/event/confirmation" element={<Event3 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
