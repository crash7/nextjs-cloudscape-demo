import React from "react";
import type { AppProps } from "next/app";

import AppLayout from "@cloudscape-design/components/app-layout";
import Header from "@cloudscape-design/components/header";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";
import Link from "@cloudscape-design/components/link";

import NotificationsDemo from "../components/NotificationsDemo";
import SideNavigationDemo from "../components/SideNavigationDemo";
import HelpPanelDemo from "../components/HelpPanelDemo";
import TopNavigationDemo from "../components/TopNavigationDemo";

import "../styles/globals.css";
import "@cloudscape-design/global-styles/index.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopNavigationDemo />
      <AppLayout
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: "System", href: "#" },
              { text: "Components", href: "#components" },
              {
                text: "Breadcrumb group",
                href: "#components/breadcrumb-group",
              },
            ]}
            ariaLabel="Breadcrumbs"
          />
        }
        contentHeader={
          <Header
            variant="h1"
            description="When you create an Amazon CloudFront distribution, you tell CloudFront where to find your content by specifying your origin servers."
            info={<Link variant="info">Info</Link>}
          >
            Create distribution
          </Header>
        }
        content={<Component {...pageProps} />}
        notifications={<NotificationsDemo />}
        navigation={<SideNavigationDemo />}
        tools={<HelpPanelDemo />}
      />
    </>
  );
}

export default App;
