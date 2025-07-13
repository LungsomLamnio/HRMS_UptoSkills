import React from 'react';
import { Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar';
import Event1 from './Event1';
import Event2 from './Event2';
import Event3 from './Event3';

export default function Events() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{ marginLeft: "250px" }}>
        <Routes>
          <Route path="/event" element={<Event1 />} />
          <Route path="/event/schedule" element={<Event2 />} />
          <Route path="/event/confirmation" element={<Event3 />} />
        </Routes>
      </div>
    </div>
  );
}
