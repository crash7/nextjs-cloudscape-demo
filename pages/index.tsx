import { useState } from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";
import Button from "@cloudscape-design/components/button";

function Home() {
  const [value, setValue] = useState("");

  return (
    <Container header={<Header variant="h1">Hello World!</Header>}>
      <SpaceBetween size="s">
        <span>Start editing to see some magic happen</span>
        <Input
          value={value}
          onChange={(event) => setValue(event.detail.value)}
        />
        <Button variant="primary">Click me</Button>
      </SpaceBetween>
    </Container>
  );
}

export default Home;
