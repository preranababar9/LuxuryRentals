// /app/admin/layout.js
import Link from "next/link";
import { MdVilla } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export default function AdminLayout({ children }) {
        return (
          <div className="flex py-16 h-screen">
            {/* Admin sidebar */}
            <div className="flex  ">
      
        <div className="px-12 py-10 bg-[#dbdee3] h-[100vh] w-full">
        <Link  href="/admin" className="text-2xl  text-nowrap text-center font-bold">Admin Dashbroad</Link>

          <ul className="flex flex-col gap-10 text-2xl items-start pt-10 font-semibold">
            <div className="flex gap-4  text-nowrap items-center">
            <FaLocationArrow size={20} />
              <Link href="/admin/villalocation"> Villa Location</Link>
            </div>

            <div className="flex gap-4 items-center">
            <MdVilla size={20}/>
              <Link href="" >Villa Details</Link>
            </div>
          </ul>
        </div>  

    
      </div>
      
            {/* Main content */}
            <div className="w-full bg-white p-4">
              {children}
            </div>
          </div>
        );
      }
      