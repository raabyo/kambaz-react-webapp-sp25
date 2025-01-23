import Labs from "./labs";
import { HashRouter, Route, Routes, Navigate } from "react-router";
import Kambaz from "./kambaz";

export default function App() {

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} /> 
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>

  );
}
