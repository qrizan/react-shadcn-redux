import { cn } from "@/lib/utils";
import { Menu, MenuItem } from './menu'

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    label: "Dashboard",
    icon: 0
  },
  {
    title: "Games",
    href: "/games",
    label: "games",
    icon: 1
  },  
  {
    title: "Users",
    href: "/users",
    label: "users",
    icon: 2
  }
];

export default function Sidebar() {
  return (
    <nav
      className={cn(`relative hidden h-screen border-r pt-16 lg:block w-72`)}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              Administrator
            </h2>
            <Menu items={menuItems} />
          </div>
        </div>
      </div>
    </nav>    
  )
}