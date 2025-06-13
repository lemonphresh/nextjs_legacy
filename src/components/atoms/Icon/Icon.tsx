import * as Icons from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: keyof typeof Icons;
  size?: number | string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
  ariaLabel?: string;
};

const Icon = ({
  name,
  size = 24,
  weight = "regular",
  className,
  ariaLabel,
}: IconProps) => {
  const IconComponent = Icons[name] as React.ElementType;

  if (!IconComponent) return null;

  return (
    <IconComponent
      aria-hidden={!ariaLabel}
      aria-label={ariaLabel}
      className={cn("inline-block", className)}
      role={ariaLabel ? "img" : "presentation"}
      size={size}
      weight={weight}
    />
  );
};

export default Icon;
