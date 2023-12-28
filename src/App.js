import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Workspace from "./Workspace";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100 object-cover  items-center">
      <Header />
      <div className="flex flex-row gap-3 ">
        <SideBar />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
