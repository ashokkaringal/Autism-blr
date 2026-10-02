import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Admissions } from "./pages/Admissions";
import { Campus } from "./pages/Campus";
import { Day } from "./pages/Day";
import { Families } from "./pages/Families";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Programmes } from "./pages/Programmes";
import { Visit } from "./pages/Visit";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programmes" element={<Programmes />} />
        <Route path="day" element={<Day />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="families" element={<Families />} />
        <Route path="campus" element={<Campus />} />
        <Route path="visit" element={<Visit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
