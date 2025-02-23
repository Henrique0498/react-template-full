import { BrowserRouter, Routes } from "react-router-dom";

import { RouterAuthenticated } from "@routers/auth";
import { RouterDefault } from "@routers/default";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {RouterDefault()}

        {RouterAuthenticated()}
      </Routes>
    </BrowserRouter>
  );
}
