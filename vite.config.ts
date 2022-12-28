import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://joaomanoelsm.github.io/ToDoList/",
  plugins: [react()],
});
