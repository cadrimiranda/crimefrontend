import { useEffect, useState } from "react";

interface IRemoveMobileDesktop {
  children: any;
  mobileOff?: boolean;
  desktopOff?: boolean;
}

const RemoveMobileDesktop = ({
  children,
  mobileOff,
  desktopOff,
}: IRemoveMobileDesktop) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (navigator.userAgent) {
      const { userAgent } = navigator;
      if (userAgent.includes("Mobile")) {
        setIsMobile(true);
      }
    }
  }, []);

  if (mobileOff && isMobile) {
    return null;
  }

  if (desktopOff && !isMobile) {
    return null;
  }

  return children;
};

export { RemoveMobileDesktop };
