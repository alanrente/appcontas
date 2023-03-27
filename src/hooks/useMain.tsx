import { useEffect } from "react";

export function useMain() {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    // let browserName;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      // browserName = "chrome";
      document.documentElement.style.setProperty("--HMain", "86vh");
    } else if (userAgent.match(/firefox|fxios/i)) {
      // browserName = "firefox";
    } else if (userAgent.match(/safari/i)) {
      // browserName = "safari";
      document.documentElement.style.setProperty("--HMain", "80vh");
    } else if (userAgent.match(/opr\//i)) {
      // browserName = "opera";
    } else if (userAgent.match(/edg/i)) {
      // browserName = "edge";
    } else {
      // browserName = "No browser detection";
    }
  }, []);
}
