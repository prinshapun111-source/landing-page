"use client";

import { useEffect } from "react";

type MetaWindow = Window & {
  fbq?: (event: "track", name: "Lead") => void;
  __smartIdeaLeadTracked?: boolean;
};

export default function MetaLeadEvent() {
  useEffect(() => {
    if (window.location.pathname !== "/thank-you") return;

    const metaWindow = window as MetaWindow;
    if (metaWindow.__smartIdeaLeadTracked) return;

    let attempts = 0;
    const trackLead = () => {
      if (typeof metaWindow.fbq !== "function") return false;
      metaWindow.__smartIdeaLeadTracked = true;
      metaWindow.fbq("track", "Lead");
      return true;
    };

    if (trackLead()) return;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (trackLead() || attempts === 20) window.clearInterval(timer);
    }, 100);

    return () => window.clearInterval(timer);
  }, []);

  return null;
}
