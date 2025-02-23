import { MainRouter } from "@routers/index";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <MainRouter />
    </Providers>
  );
}

export default App;
