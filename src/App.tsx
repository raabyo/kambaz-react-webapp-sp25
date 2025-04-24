import Labs from "./labs";
import { HashRouter, Route, Routes, Navigate } from "react-router";
import Kambaz from "./kambaz";
import store from "./kambaz/store";
import { Provider } from "react-redux";

export default function App() {

  return (
    <HashRouter>
      <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} /> 
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>

  );
}
