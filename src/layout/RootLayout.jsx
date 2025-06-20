import { Outlet } from "react-router-dom";
import Navbare from "../components/Navbare";
import Footer from "./Footer";

function RootLayout() {
    return(
        <div>
            <Navbare />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootLayout;