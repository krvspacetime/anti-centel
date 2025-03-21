import { MantineProvider } from "@mantine/core";
import { AppLayout } from "./popup/components/layout/AppLayout";

function App() {
  return (
    <>
      <MantineProvider forceColorScheme="dark">
        <AppLayout />
      </MantineProvider>
    </>
  );
}

export default App;
