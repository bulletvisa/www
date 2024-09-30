import { useEffect, useState } from "react";

export const useIsMobileScreen = () => {
  const [width, setWidth] = useState<number>();

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width ? width <= 768 : null;
};
