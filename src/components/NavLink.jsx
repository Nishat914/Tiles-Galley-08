'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({href , children})   => {
    const pathname = usePathname();
    console.log(pathname);

    const isActive = href === pathname 
    return (
        <Link href={href} className={`${isActive ? "border-b-2 border-b-cyan-600" : " "}`}>{children}</Link>
    )
}
export default NavLink;