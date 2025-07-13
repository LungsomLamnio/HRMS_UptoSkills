import SideBar from "./SideBar";
import Schedule from "./Page-3"
import "../App.css"

export default function Events() {
  return (
    <>
    <div className="events-comp d-flex">
      <SideBar />
      <Schedule />
    </div>
    </>
  );
}
