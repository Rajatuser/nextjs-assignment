'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menus = [
   {value:'Dashboard', link:'/dashboard'},
   {value:'Invoices', link:'/dashboard/invoices'},
   {value:'Dummy' , link: '/dashboard/invoices/dummy'},
   {value: 'Customers', link: '/customers'}
]

const Sidebar = () => {
    const pathname = usePathname()
    return (
        <div className="bg-gray-800 text-white h-screen w-64 py-6 px-4 absolute">
            <Link href="/" className="text-white text-2xl font-semibold">
                Logo
            </Link>
            <nav className="mt-6">
                {
                    Menus.map(item => (
                        <Link key={item.link} href={item.link} className={`block py-2 px-4 text-gray-300 ${pathname === item.link ? 'text-gray-700 bg-white rounded' : 'hover:bg-gray-700 hover:text-white rounded'}`}>
                            {item.value}
                        </Link>
                    ))
                }

            </nav>
        </div>

    );
};

export default Sidebar;