import { cn } from "@/lib/utils";
import { ClassNameProps } from "kbr-nextjs-shared/props";
import { CircleHelp, MessageSquareQuote, Sparkles } from "lucide-react";

interface DescriptionProps extends ClassNameProps, TextProps {
  iconClassName?: string;
  lucideIcon?: React.FC<ClassNameProps>;
}

interface TextProps extends ClassNameProps {
  text: React.ReactNode;
}

export function Description({
  text,
  lucideIcon,
  className,
  iconClassName,
}: DescriptionProps) {
  const LucideIcon = lucideIcon ?? CircleHelp;
  return (
    <div className={cn("flex mt-4 mb-1", className)}>
      <LucideIcon
        className={cn(
          "w-4 min-w-4 h-4 mr-1 mt-[0.29rem] text-purple-800",
          iconClassName
        )}
      />
      {text}
    </div>
  );
}

export function QuoteDescription({ text }: TextProps) {
  return (
    <Description
      className="font-bold text-primary"
      text={text}
      lucideIcon={MessageSquareQuote}
    />
  );
}

export function SparkleDescription({ text, className }: TextProps) {
  return (
    <Description
      className={cn("font-bold text-blue-500", className)}
      iconClassName="text-blue-800"
      text={text}
      lucideIcon={Sparkles}
    />
  );
}
