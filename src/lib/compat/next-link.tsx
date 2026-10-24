import React from "react";
import { Link as TanStackLink } from "@tanstack/react-router";

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  prefetch?: boolean;
}

export function Link({
  href,
  children,
  className,
  onClick,
  target,
  rel,
  ...rest
}: LinkProps) {
  // If it's an external link or a hash/mailto/tel, use standard <a> tag
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  ) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target={target}
        rel={rel}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <TanStackLink
      to={href}
      className={className}
      onClick={onClick}
      target={target}
      rel={rel}
      {...(rest as any)}
    >
      {children}
    </TanStackLink>
  );
}

export default Link;
