'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="w-full py-4 absolute top-0 left-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-2 lg:px-8">
                <Link href="/" className="flex items-center space-x-2 mr-4 lg:mr-8">
                    <img src="xonads.png" alt="Logo" className="h-12" />
                </Link>

                {/* Desktop Navigation (No Wrapping) */}
                <div className="hidden md:flex items-center grow justify-center space-x-8">
                    {[
                        { label: 'Advertise', href: '#' },
                        { label: 'Monetize', href: '#' },
                        { label: 'Ad Formats', href: '#' },
                        { label: 'Blog', href: '#' },
                        { label: 'Events', href: '#' },
                    ].map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-4 lg:ml-8">
                    <Button
                        variant="ghost"
                        className="hidden ml-2 md:inline-block text-white hover:text-gray-900 transition-colors duration-200"
                    >
                        Sign in
                    </Button>
                    <Button className="bg-[#e28833] text-black hover:bg-[#CCFF00]/90 transition-colors duration-200">
                        Register
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-gray-300 focus:outline-none ml-4 lg:ml-0"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-800/90 backdrop-blur-sm absolute top-16 left-0 w-full py-4">
                    <div className="container mx-auto px-4">
                        {[
                            { label: 'Advertise', href: '#' },
                            { label: 'Monetize', href: '#' },
                            { label: 'Ad Formats', href: '#' },
                            { label: 'Blog', href: '#' },
                            { label: 'Events', href: '#' },
                            { label: 'Sign In', href: '#' },
                            // {
                            //     label: 'Register',
                            //     href: '#',
                            //     className: 'w-full bg-[#e28833] text-black hover:bg-[#CCFF00]/90 py-2 mt-2 rounded',
                            // },
                        ].map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`${
                                    link.className ? link.className : 'block text-white hover:text-gray-300 py-2'
                                } transition-colors duration-200`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}