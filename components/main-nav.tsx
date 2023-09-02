"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const routes = [
    {
      href: `/`,
      label: "Overview",
      active: pathname === `/`,
    },
    {
      href: `/settings`,
      label: "Settings",
      active: pathname === `/settings`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-xl font-medium transition-colors hover:text-primary",
            route.active ? "text-white dark:text-white" : "text-gray-400"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
