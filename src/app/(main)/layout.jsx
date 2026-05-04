import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
const MainLayout = ({children})   => {
    return (
        <>
           
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
           <ToastContainer />
        </>
    )
}
export default MainLayout;