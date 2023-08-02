import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import Inspect from "vite-plugin-inspect"; // inspect at localhost:3000/__inspect/
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [react(), ssr(), Inspect()],
};

export default config;
