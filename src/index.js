import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { Provider } from "./context/books.js";

createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
);
