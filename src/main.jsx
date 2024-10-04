import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
      

    </BrowserRouter>
  </Provider>
);
