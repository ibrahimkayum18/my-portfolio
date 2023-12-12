import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Main = () => {
    return (
        <div className="bg-slate-950 text-white">
            <NavBar />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;