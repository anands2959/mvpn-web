'use client';
import Link from 'next/link';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${scrolled
                    ? 'bg-[#0B1120]/70 backdrop-blur-2xl border-white/10 h-16 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
                    : 'bg-transparent border-white/0 h-20'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group relative cursor-pointer">
                        {/* <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

                        <img src="./logo.png" alt="" className='w-10 h-10' />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:to-white transition-colors">
                            mVPN
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md mr-4">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/privacy">Privacy</NavLink>
                            <NavLink href="/terms">Terms</NavLink>
                        </div>

                        <button className="group px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-indigo-50 transition-all flex items-center gap-2 hover:pr-5 hover:pl-7 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Get App
                            <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:translate-x-1 group-hover:ml-0 transition-all" />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-3 text-gray-300 hover:text-white bg-white/5 rounded-xl border border-white/5 active:scale-95 transition-all"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X strokeWidth={2.5} /> : <Menu strokeWidth={2.5} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0B1120]/95 backdrop-blur-3xl pt-28 px-6 md:hidden flex flex-col gap-6"
                    >
                        <MobileLink href="/" onClick={() => setIsOpen(false)}>Home</MobileLink>
                        <MobileLink href="/privacy" onClick={() => setIsOpen(false)}>Privacy Policy</MobileLink>
                        <MobileLink href="/terms" onClick={() => setIsOpen(false)}>Terms of Use</MobileLink>
                        <MobileLink href="/delete-account" onClick={() => setIsOpen(false)}>Delete Account</MobileLink>

                        <div className="mt-8 pt-8 border-t border-white/10">
                            <button className="w-full py-4 bg-white text-black font-bold text-lg rounded-2xl shadow-xl flex items-center justify-center gap-2">
                                Download App
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="px-6 py-2.5 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
            {children}
        </Link>
    )
}

function MobileLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
    return (
        <Link href={href} onClick={onClick} className="text-2xl font-bold text-white flex items-center justify-between group">
            {children}
            <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
        </Link>
    )
}
