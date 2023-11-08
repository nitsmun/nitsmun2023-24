import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ContextProvider } from "./Context/ContextProv.jsx";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        {import.meta.env.MODE !== "production" && (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        )}
      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>
);
