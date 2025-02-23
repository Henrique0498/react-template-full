import { Homepage } from "@pages/Homepage";
import { NotFound } from "@pages/NotFound";
import { TemplateAuthenticated } from "@templates/Authenticated";
import { Route } from "react-router-dom";

export function RouterAuthenticated() {
  return (
    <Route path="app" element={<TemplateAuthenticated />}>
      <Route index element={<Homepage />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  );
}
