import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    const id = hash.replace("#", "");

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    };

    if (tryScroll()) return undefined;

    const frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};
