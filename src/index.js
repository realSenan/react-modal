import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ModalProvider from "./components/context/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
