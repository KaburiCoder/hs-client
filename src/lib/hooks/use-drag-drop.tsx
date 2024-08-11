import React, { useMemo, useRef, useState } from "react";

interface UseDragDropArgs {
  onImagesDrop: (files: File[]) => void;
}
export function useDragDrop<T extends HTMLElement>({
  onImagesDrop,
}: UseDragDropArgs) {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T>(null);

  function onDragEnter(e: React.DragEvent<T>): void {
    setIsHover(true);
  }

  function onDragLeave(e: React.DragEvent<T>): void {
    e.preventDefault();
    const relEl = e.relatedTarget as HTMLElement;

    if (!ref?.current?.contains(relEl)) {
      setIsHover(false);
    }
  }

  function onDragOver(e: React.DragEvent<T>): void {
    e.preventDefault();
  }

  function onDrop(e: React.DragEvent<T>): void {
    e.preventDefault();
    setIsHover(false);
    const files = Array.from(e.dataTransfer.files);

    const imageFiles = files.filter((f) => f.type.startsWith("image/"));

    onImagesDrop?.(imageFiles);
  }

  return {
    isHover,
    ref,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
  };
}
