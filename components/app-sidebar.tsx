"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Agreement02Icon,
  Calendar03Icon,
  ChatFeedback01Icon,
  ClipboardIcon,
} from "@hugeicons/core-free-icons";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form";

// Map of links to display in the side navigation.
const links = [
  {
    name: "Feed",
    href: "/",
    icon: <HugeiconsIcon strokeWidth={2} icon={ChatFeedback01Icon} />,
  },
  {
    name: "Events",
    href: "/events",
    icon: <HugeiconsIcon strokeWidth={2} icon={Calendar03Icon} />,
  },
  {
    name: "Neighbors",
    href: "#",
    icon: <HugeiconsIcon strokeWidth={2} icon={Agreement02Icon} />,
  },
  {
    name: "Bulletin Board",
    href: "/bulletin-board",
    icon: <HugeiconsIcon strokeWidth={2} icon={ClipboardIcon} />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {links.map((item) => (
          <SidebarGroup key={item.name}>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        "flex h-[64px] grow items-center justify-center rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-gray-700 md:flex-none md:justify-start md:p-2 md:px-3",
                        {
                          "bg-gray-200 text-gray-900": pathname === item.href,
                        },
                      )}
                    >
                      {item.icon}
                      <p>{item.name}</p>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
