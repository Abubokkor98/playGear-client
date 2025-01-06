import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className="max-w-screen-2xl mx-auto dark:bg-gray-800">
          <Toaster position="top-center" />
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
