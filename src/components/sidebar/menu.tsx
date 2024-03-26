import { Link, useLocation } from 'react-router-dom';

import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { DashboardIcon, PersonIcon, CubeIcon } from '@radix-ui/react-icons';

export interface MenuItem {
  title: string;
  href?: string;
  label?: string;
  icon: number
}

interface MenuProps {
  items: MenuItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function Menu({ items, setOpen }: MenuProps) {
  const { pathname } = useLocation();

  const icons = [DashboardIcon, CubeIcon, PersonIcon ]
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          item.href && (
            <Link
              key={index}
              to={item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-sm px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent" : "transparent"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}