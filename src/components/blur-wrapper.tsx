import { cn } from "@/lib/utils";
import { ChildrenClassNameProps, ChildrenProps } from "kbr-nextjs-shared/props";
import React, { cloneElement, isValidElement } from "react";

interface BlurWrapperProps extends ChildrenClassNameProps {
  blur: boolean;
}

export function BlurWrapper({ blur, className, children }: BlurWrapperProps) {
  const renderChildrenWithDisabled = (
    children: React.ReactNode,
  ): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (isValidElement(child)) {
        // Check if the child has its own children
        const childProps: any = { isDisabled: blur };
        if (child.props.children) {
          childProps.children = renderChildrenWithDisabled(
            child.props.children,
          );
        }
        return cloneElement(child, childProps);
      }
      return child;
    });
  };

  return (
    <div
      className={cn(
        blur ? "pointer-events-none relative p-2 opacity-50" : "",
        className,
      )}
    >
      {blur && (
        <div className="absolute left-0 top-0 z-10 h-full w-full rounded-2xl bg-slate-500/10" />
      )}
      {renderChildrenWithDisabled(children)}
    </div>
  );
}
