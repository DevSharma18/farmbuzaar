import { SiWalletconnect } from "react-icons/si";

export default function Header() {
    const connectWallet = async () => {
        console.log("Wallet connected!");
    };

    return (
        <header className="flex items-center justify-between p-5 bg-transparent text-white font-mono absolute top-0 left-0 right-0 z-10">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-200 to-white">
                FarmBazaar
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={connectWallet}
                    className="flex items-center px-6 py-2 bg-gradient-to-r from-green-400 via-green-500 to-white text-gray-900 rounded-full text-lg font-bold hover:from-white hover:to-green-500 transition duration-300"
                >
                    Connect Wallet
                    <SiWalletconnect className='ml-2 text-2xl' />
                </button>

            </div>
        </header>
    );
}
