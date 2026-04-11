import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/fullstack_js/react_router_43/dist/",
  plugins: [react()],
});
