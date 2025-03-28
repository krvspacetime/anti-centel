import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { TweetStyleMenu } from "../tweet-options/TweetStyleMenu";
import "../../../index.css";
import "@mantine/core/styles.css";

function Options() {
  return (
    <MantineProvider forceColorScheme="dark">
      <TweetStyleMenu />
    </MantineProvider>
  );
}

// Mount the component
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

createRoot(rootElement).render(
  <StrictMode>
    <Options />
  </StrictMode>,
);
