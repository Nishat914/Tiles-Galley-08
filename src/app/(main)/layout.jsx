import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
const MainLayout = ({children})   => {
    return (
        <>
           
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </>
    )
}
export default MainLayout;