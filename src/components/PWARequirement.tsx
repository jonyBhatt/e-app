import { useState, useEffect } from "react";

// Set this to false to allow users to use the web version without forcing app installation
export const FORCE_PWA_INSTALL = true;

export const PWARequirement = ({ children }: { children: React.ReactNode }) => {
  const [isStandalone, setIsStandalone] = useState(true); // Default to true to prevent flash
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    // Check if the app is already installed and running as a PWA
    const checkStandalone = () => {
      const isStandaloneMode =
        window.matchMedia("(display-mode: standalone)").matches ||
        ("standalone" in window.navigator && window.navigator.standalone);
      
      setIsStandalone(!!isStandaloneMode);
    };

    checkStandalone();

    // Listen for display mode changes
    window.matchMedia("(display-mode: standalone)").addEventListener("change", checkStandalone);

    // Listen for the install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    return () => {
      window.matchMedia("(display-mode: standalone)").removeEventListener("change", checkStandalone);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
      }
    } else {
      alert("Please install the app using your browser's menu (Add to Home Screen).");
    }
  };

  // If not forcing PWA, or if already in standalone mode, render the app normally
  if (!FORCE_PWA_INSTALL || isStandalone) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 p-4 text-center text-white">
      <div className="max-w-md rounded-2xl bg-zinc-900 p-8 shadow-2xl border border-zinc-800">
        <h2 className="mb-4 text-3xl font-bold">Install App to Continue</h2>
        <p className="mb-8 text-zinc-400">
          For the best experience, please install our Progressive Web App on your device.
        </p>
        
        <button
          onClick={handleInstallClick}
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {deferredPrompt ? "Install App Now" : "How to Install?"}
        </button>
        
        {!deferredPrompt && (
          <p className="mt-4 text-sm text-zinc-500">
            Tap the share button on iOS or menu button on Android, then select "Add to Home Screen".
          </p>
        )}
      </div>
    </div>
  );
};
