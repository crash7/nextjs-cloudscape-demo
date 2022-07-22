import { useState } from "react";
import { Flashbar } from "@cloudscape-design/components";

function NotificationsDemo() {
  const [items, setItems] = useState([
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (
        <>
          This demo is an example of Cloudscape patterns and components, and may
          not reflect the current patterns and components of AWS services.
        </>
      ),
      id: "message_1",
    },
  ]);
  return (
    <Flashbar
      // @ts-expect-error
      items={items}
    />
  );
}

export default NotificationsDemo;
