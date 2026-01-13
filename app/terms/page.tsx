export default function TermsOfUse() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Terms of Use</h1>
            <div className="prose prose-invert prose-indigo max-w-none glass-panel p-8 rounded-3xl text-gray-300">
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the mVPN application, you agree to be bound by these Terms of Use. If you disagree with any part of the terms, you may not access the service.
                </p>

                <h2>2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the mVPN application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>

                <h2>3. Prohibited Uses</h2>
                <p>You agree not to use mVPN for:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Any unlawful purpose or to solicit others to perform or participate in any unlawful acts.</li>
                    <li>Transmission of any worms or viruses or any code of a destructive nature.</li>
                    <li>Violating any international, federal, provincial or state regulations, rules, laws, or local ordinances.</li>
                </ul>

                <h2>4. Disclaimer</h2>
                <p>
                    The mVPN service is provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    In no event shall mVPN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on mVPN's website or app.
                </p>
            </div>
        </div>
    );
}
