import { useState } from "react";
import { SideNavigation, Badge } from "@cloudscape-design/components";

function SideNavigationDemo() {
  const [activeHref, setActiveHref] = useState("#/page1");
  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "Service name" }}
      onFollow={(event) => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={[
        { type: "link", text: "Page 1", href: "#/page1" },
        { type: "link", text: "Page 2", href: "#/page2" },
        { type: "link", text: "Page 3", href: "#/page3" },
        { type: "link", text: "Page 4", href: "#/page4" },
        { type: "divider" },
        {
          type: "link",
          text: "Notifications",
          href: "#/notifications",
          info: <Badge color="red">23</Badge>,
        },
        {
          type: "link",
          text: "Documentation",
          href: "https://example.com",
          external: true,
        },
      ]}
    />
  );
}

export default SideNavigationDemo;
