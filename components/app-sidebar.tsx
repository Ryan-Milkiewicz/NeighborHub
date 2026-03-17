import { HugeiconsIcon } from "@hugeicons/react";
import {
  Agreement02Icon,
  Calendar03Icon,
  ChatFeedback01Icon,
  ClipboardIcon,
} from "@hugeicons/core-free-icons";
import { SearchForm } from "@/components/search-form";
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

const data = {
  navMain: [
    {
      title: "Main Content",
      url: "#",
      items: [
        {
          title: "Feed",
          url: "#",
          isActive: true,
          icon: <HugeiconsIcon strokeWidth={2} icon={ChatFeedback01Icon} />,
        },
        {
          title: "Events",
          url: "#",
          icon: <HugeiconsIcon strokeWidth={2} icon={Calendar03Icon} />,
        },
        {
          title: "Neighbors",
          url: "#",
          icon: <HugeiconsIcon strokeWidth={2} icon={Agreement02Icon} />,
        },
        {
          title: "Bulletin Board",
          url: "#",
          icon: <HugeiconsIcon strokeWidth={2} icon={ClipboardIcon} />,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>
                        {item.icon}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
