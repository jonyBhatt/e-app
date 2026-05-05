import { useState, useEffect } from "react";

// Set this to false to allow users to use the web version without forcing app installation
export const FORCE_PWA_INSTALL = true;

// Set this to true to enable automatic download for external links (prevents opening browser)
// Set to false to allow links to open normally in browser
export const AUTO_DOWNLOAD_EXTERNAL_LINKS = true;

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
    window
      .matchMedia("(display-mode: standalone)")
      .addEventListener("change", checkStandalone);

    // Listen for the install prompt
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    // Handle external link downloads
    if (AUTO_DOWNLOAD_EXTERNAL_LINKS) {
      const handleLinkClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest("a") as HTMLAnchorElement;

        if (link && link.href) {
          const isExternalLink =
            !link.href.startsWith(window.location.origin) &&
            !link.href.startsWith("/");

          if (isExternalLink) {
            e.preventDefault();
            downloadFile(link.href, link.getAttribute("download") || getFilenameFromUrl(link.href));
          }
        }
      };

      document.addEventListener("click", handleLinkClick);

      return () => {
        window
          .matchMedia("(display-mode: standalone)")
          .removeEventListener("change", checkStandalone);
        document.removeEventListener("click", handleLinkClick);
      };
    }

    return () => {
      window
        .matchMedia("(display-mode: standalone)")
        .removeEventListener("change", checkStandalone);
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
      alert(
        "Please install the app using your browser's menu (Add to Home Screen).",
      );
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
          For the best experience, please install our Progressive Web App on
          your device.
        </p>

        <button
          onClick={handleInstallClick}
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {deferredPrompt ? "Install App Now" : "How to Install?"}
        </button>

        {!deferredPrompt && (
          <p className="mt-4 text-sm text-zinc-500">
            Tap the share button on iOS or menu button on Android, then select
            "Add to Home Screen".
          </p>
        )}
      </div>
    </div>
  );
};

// Helper function to download files
function downloadFile(url: string, filename: string) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = () => {
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(xhr.response);
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };
  xhr.open("GET", url);
  xhr.send();
}

// Helper function to extract filename from URL
function getFilenameFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    const filename = pathname.substring(pathname.lastIndexOf("/") + 1);
    return filename || "download";
  } catch {
    return "download";
  }
}
