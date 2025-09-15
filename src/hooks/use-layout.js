"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children, leftOpen, rightOpen }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [availableWidth, setAvailableWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    const LEFT_SIDEBAR_WIDTH = 212;
    const RIGHT_SIDEBAR_WIDTH = 280;
    
    let available = windowWidth;
    if (leftOpen) available -= LEFT_SIDEBAR_WIDTH;
    if (rightOpen) available -= RIGHT_SIDEBAR_WIDTH;
    
    setAvailableWidth(Math.max(available, 320)); // Minimum 320px
  }, [windowWidth, leftOpen, rightOpen]);

  const getBreakpoint = () => {
    if (availableWidth >= 1200) return 'xl';
    if (availableWidth >= 1024) return 'lg';
    if (availableWidth >= 768) return 'md';
    if (availableWidth >= 640) return 'sm';
    return 'xs';
  };

  const isCompact = availableWidth < 900;
  const isVeryCompact = availableWidth < 600;

  return (
    <LayoutContext.Provider value={{
      windowWidth,
      availableWidth,
      breakpoint: getBreakpoint(),
      isCompact,
      isVeryCompact,
      leftOpen,
      rightOpen
    }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};