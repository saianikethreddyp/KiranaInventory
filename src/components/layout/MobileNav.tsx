"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Package,
    PackagePlus,
    PackageMinus,
    Bell
} from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Dash", icon: LayoutDashboard },
    { href: "/products", label: "Items", icon: Package },
    { href: "/stock-in", label: "In", icon: PackagePlus },
    { href: "/stock-out", label: "Out", icon: PackageMinus },
    { href: "/alerts", label: "Alerts", icon: Bell },
];

export function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background md:hidden">
            <div className="grid h-16 grid-cols-5 items-center justify-items-center">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
                                isActive
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-accent-foreground"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive && "fill-current")} />
                            {item.label}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
