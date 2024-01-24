import { defineConfig } from 'vite'
import { unstable_vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), remix(), tsconfigPaths()],
})
