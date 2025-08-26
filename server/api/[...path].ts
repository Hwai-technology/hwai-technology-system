import type { H3Event } from "h3";
import http from "node:http";
import https from "node:https";

export default async (event: H3Event) => {
const backendUrl = "https://jsonplaceholder.typicode.com";

  const path = Array.isArray(event.context.params?.path)
    ? event.context.params.path.join("/")
    : event.context.params?.path || "";

  const urlObj = new URL(`${backendUrl}/${path}`);
  if (event.node.req.url?.includes("?")) {
    urlObj.search = event.node.req.url.split("?")[1];
  }

  const headers = { ...event.req.headers };
  delete headers.host;

  return new Promise((resolve, reject) => {
    const lib = urlObj.protocol === "https:" ? https : http;

    const req = lib.request(
      urlObj,
      { method: event.req.method, headers },
      (res) => {
        const chunks: Uint8Array[] = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          resolve(
            new Response(Buffer.concat(chunks), {
              status: res.statusCode,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              headers: res.headers as any,
            })
          );
        });
      }
    );

    req.on("error", reject);

    // إرسال body إذا موجود
    event.node.req.on("data", (chunk) => req.write(chunk));
    event.node.req.on("end", () => req.end());
  });
};
