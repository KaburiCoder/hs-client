"use client";
import { ChildrenProps } from "kbr-nextjs-shared/props";
import { createContext, useContext, useEffect, useState } from "react";

interface WindowScrollContextType {
  y: number;
  isBottom: boolean;
}

const initialize: WindowScrollContextType = {
  y: 0,
  isBottom: false,
};

export const WindowScrollContext = createContext<WindowScrollContextType>(initialize);

export const useWindowScroll = () => {
  return useContext(WindowScrollContext);
};

export const WindowScrollProvider = ({ children }: ChildrenProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      // 스크롤 위치가 최하단인지 확인
      setIsBottom(scrollHeight - scrollTop === clientHeight);
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 한 번 호출
  return (
    <WindowScrollContext.Provider value={{ y: scrollY, isBottom }}>
      {children}
    </WindowScrollContext.Provider>
  );
};
