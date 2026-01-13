export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
            <div className="prose prose-invert prose-indigo max-w-none glass-panel p-8 rounded-3xl text-gray-300">
                <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

                <h2>1. Introduction</h2>
                <p>
                    mVPN ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and related services.
                </p>

                <h2>2. Information We Collect</h2>
                <p><strong>We have a strict No-Logs Policy.</strong> We do not track, store, or share your browsing activity, connection logs, or IP addresses.</p>

                <h3>Information you provide:</h3>
                <ul>
                    <li>Account information (Email address) for subscription management.</li>
                    <li>Payment information (processed securely by third-party providers).</li>
                </ul>

                <h3>Technical Data:</h3>
                <ul>
                    <li>Device model and OS version (for troubleshooting and compatibility).</li>
                    <li>Aggregated, anonymous app usage statistics (e.g., crash reports).</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <ul>
                    <li>To provide and maintain the VPN service.</li>
                    <li>To manage your subscription and account.</li>
                    <li>To improved customer support.</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>
                    We implement industry-standard security measures, including ChaCha20 encryption for VPN tunnels and secure HTTPS for API communication, to protect your data.
                </p>

                <h2>5. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@mvpn.com" className="text-indigo-400">support@mvpn.com</a>
                </p>
            </div>
        </div>
    );
}
