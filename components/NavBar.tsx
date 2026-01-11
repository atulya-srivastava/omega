import Image from "next/image";
import { Heart, User, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between my-4 px-4 py-3">
        

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-700">Omega</span>
          </div>

          <button className="flex items-center gap-1 rounded-full border px-4 py-4 text-md text-gray-700">
            Select city
            <ChevronDown size={16} />
          </button>


          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search by assured plus cars"
              className="w-70 rounded-full border py-4 pl-10 pr-4 text-md outline-none focus:border-purple-600"
            />
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 text-md text-gray-700">
          
          <NavItem label="Buy car" />
          <NavItem label="Sell car" />
          <NavItem label="More" />

          <button className="flex items-center gap-1 hover:text-purple-700">
            <Heart size={18} />
            Shortlisted
          </button>

          <button className="flex items-center gap-1 hover:text-purple-700">
            <User size={18} />
            Account
            <ChevronDown size={14} />
          </button>

          <div className="hidden lg:block text-right">
            <p className="text-xs text-gray-500">Call us at</p>
            <p className="font-semibold text-purple-700">727-727-7275</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 hover:text-purple-700">
      {label}
      <ChevronDown size={14} />
    </button>
  );
}
