import { Route, Routes } from "react-router-dom";
import Events from "./components/Events";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
