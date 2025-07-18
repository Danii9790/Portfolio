"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="bg-white text-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Portfolio */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-300">
            <Image
              src="/images/dani.png"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-lg font-semibold text-gray-800">Developer</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button>
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem>
                <Link href="/" className="w-full">
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about" className="w-full">
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects" className="w-full">
                  Projects
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
