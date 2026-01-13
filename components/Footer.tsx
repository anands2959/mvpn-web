import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] border-t border-white/5 py-12 px-6 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold text-white">mVPN</span>
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} mVPN Security. All rights reserved.</p>
                </div>

                <div className="flex gap-8 flex-wrap justify-center">
                    <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/delete-account" className="text-sm text-gray-400 hover:text-white transition-colors">Delete Account</Link>
                </div>
            </div>
        </footer>
    );
}
