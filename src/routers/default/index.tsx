import { Homepage } from "@pages/Homepage";
import { NotFound } from "@pages/NotFound";
import { TemplateDefault } from "@templates/Default";
import { Route } from "react-router-dom";

export function RouterDefault() {
  return (
    <Route element={<TemplateDefault />}>
      <Route index element={<Homepage />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  );
}
