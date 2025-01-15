import { useCallback } from "react";

interface UseScrollToSectionProps {
  onScrollComplete?: () => void;
}

export const useScrollToSection = ({
  onScrollComplete,
}: UseScrollToSectionProps = {}) => {
  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href?.startsWith("#")) return;
      window.history.pushState({}, "", href);
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      onScrollComplete?.();
    },
    [onScrollComplete]
  );
};
