import { Trash2, AlertTriangle } from "lucide-react";

export default function DeleteAccount() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-red-500/20 rounded-xl">
                    <Trash2 className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-4xl font-bold text-white">Delete Account</h1>
            </div>

            <div className="glass-panel p-8 rounded-3xl space-y-6">
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0" />
                    <p className="text-yellow-200">
                        Warning: This action is permanent and cannot be undone. All your data, including subscription history and preferences, will be permanently removed.
                    </p>
                </div>

                <div className="space-y-4 text-gray-300">
                    <h2 className="text-2xl font-bold text-white">How to request data deletion</h2>
                    <p>
                        To comply with data safety regulations and ensure you have full control over your data, we provide a simple way to request account deletion.
                    </p>

                    <div className="pl-4 border-l-2 border-indigo-500/30 space-y-4">
                        <div>
                            <h3 className="font-bold text-white text-lg">Option 1: In-App Deletion (Instant)</h3>
                            <p>
                                1. Open the mVPN App.<br />
                                2. Go to <strong>Settings</strong>.<br />
                                3. Scroll down to the <strong>Danger Zone</strong>.<br />
                                4. Tap <strong>Delete Account</strong>.<br />
                                5. Enter your password to confirm.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-white text-lg">Option 2: Email Request</h3>
                            <p>
                                If you cannot access the app, please email us with the subject line <strong>"DELETE ACCOUNT REQUEST"</strong>. Use the email address associated with your account.
                            </p>
                            <div className="mt-4 p-4 bg-white/5 rounded-xl">
                                <p className="font-mono text-sm">To: <span className="text-indigo-400">support@mvpn.com</span></p>
                                <p className="font-mono text-sm">Subject: DELETE ACCOUNT REQUEST</p>
                                <p className="font-mono text-sm">Body: Please delete my account associated with [Your Email].</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 pt-4">
                        We typically process email requests within 48 hours. Once processed, you will receive a confirmation email.
                    </p>
                </div>
            </div>
        </div>
    );
}
