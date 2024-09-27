// /app/admin/layout.js
import Link from "next/link";
import { MdVilla } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export default function AdminLayout({ children }) {
        return (
          <div className="flex py-16 h-screen">
            {/* Admin sidebar */}
            <div className="flex  ">
      
        <div className="lg:px-12  px-2 py-10 bg-[#dbdee3] h-[100vh] w-[300px] max-md:w-[150px]">
        <Link  href="/admin" className="text-2xl max-md:text-lg   lg:text-nowrap text-center font-bold">Admin Dashbroad</Link>

          <ul className="flex flex-col gap-10 text-2xl max-md:text-lg   items-start pt-10 font-semibold">
            <div className="flex gap-4  max-md:gap-2  lg:text-nowrap items-center">
            <FaLocationArrow size={20} />
              <Link href="/admin/villalocation"> Villa Location</Link>
            </div>

            <div className="flex gap-4  max-md:gap-2 items-center">
            <MdVilla size={20}/>
              <Link href="" >Villa Details</Link>
            </div>
          </ul>
        </div>  

    
      </div>
      
            {/* Main content */}
            <div className="w-full bg-white p-3">
              {children}
            </div>
          </div>
        );
      }
      