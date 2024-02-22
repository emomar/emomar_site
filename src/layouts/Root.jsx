import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
