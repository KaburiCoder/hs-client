import { cn } from "@/lib/utils";
import { ChildrenProps, ClassNameProps } from "kbr-nextjs-shared/props";
import { CircleHelp, MessageSquareQuote, Sparkles } from "lucide-react";

interface DescriptionProps extends ClassNameProps, TextProps {
  id?: string;
  headmark?: string;
  iconClassName?: string;
  lucideIcon?: React.FC<ClassNameProps>;
}

interface TextProps extends ClassNameProps {
  text: React.ReactNode;
}

export function Description({
  text,
  lucideIcon: LucideIcon,
  className,
  iconClassName,
  headmark,
  id,
}: DescriptionProps) {
  return (
    <div id={id} className={cn("mb-1 mt-4 flex", className)}>
      {LucideIcon && (
        <LucideIcon
          className={cn(
            "mr-1 mt-[0.29rem] h-4 w-4 min-w-4 text-purple-800",
            iconClassName,
          )}
        />
      )}
      {headmark && (
        <span className="mr-2 flex min-w-11 items-center justify-center rounded border border-rose-200 px-2 font-semibold text-rose-500">
          {headmark}
        </span>
      )}
      {text}
    </div>
  );
}

interface DescriptionWrapperProps extends DescriptionProps, ChildrenProps {
  wrapperId?: string;
  wrapperClassName?: string;
}
export function DescriptionWrapper({
  children,
  wrapperId,
  wrapperClassName,
  ...props
}: DescriptionWrapperProps) {
  return (
    <div id={wrapperId} className={cn("flex flex-col gap-4", wrapperClassName)}>
      <Description {...props} />
      {children}
    </div>
  );
}

export function QuoteDescription({ text }: TextProps) {
  return (
    <Description
      className={cn("whitespace-pre-line font-bold text-primary")}
      text={text}
      lucideIcon={MessageSquareQuote}
    />
  );
}

export function SparkleDescription({ text, className }: TextProps) {
  return (
    <Description
      className={cn("whitespace-pre-line font-bold text-blue-500", className)}
      iconClassName="text-blue-800"
      text={text}
      lucideIcon={Sparkles}
    />
  );
}
