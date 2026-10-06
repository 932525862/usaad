// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    plugins: [
      {
        name: "telegram-api-proxy",
        configureServer(server) {
          server.middlewares.use("/api/telegram", (req, res) => {
            if (req.method === "POST") {
              let body = "";
              req.on("data", (chunk) => {
                body += chunk;
              });
              req.on("end", async () => {
                try {
                  const parsed = JSON.parse(body);
                  const BOT_TOKEN = "8857786618:AAHMLmAkPqSaxn71wpsiy1Q7f1QdRZNy8lQ";
                  const CHAT_ID = "-1004398955598";
                  const telegramRes = await fetch(
                    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: parsed.text,
                      }),
                    }
                  );
                  const data = await telegramRes.json();
                  res.statusCode = telegramRes.status;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(data));
                } catch (e: any) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ ok: false, error: e.message }));
                }
              });
            } else {
              res.statusCode = 405;
              res.end("Method Not Allowed");
            }
          });
        },
      },
    ],
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
