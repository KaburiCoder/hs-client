import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { ChildrenClassNameProps } from "kbr-nextjs-shared/props";

interface AdminCardProps extends ChildrenClassNameProps {
  header: {
    title: string;
    description?: string;
  };
  footer?: React.ReactNode;
}

export function AdminCard({
  className,
  children,
  header,
  footer,
}: AdminCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex justify-between gap-3">
        <div className="flex flex-col">
          <p className="text-md">{header.title}</p>
          {header.description && (
            <p className="text-small text-default-500">{header.description}</p>
          )}
        </div>
      </CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
