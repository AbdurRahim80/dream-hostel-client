import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayOut = () => {
    return (
        <div className="">
            <Navbar />
            <div className="max-w-screen-xl mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default LayOut;