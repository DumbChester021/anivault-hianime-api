import { cors } from "hono/cors";
import { env } from "./env.js";

const allowedOrigins = env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
    ? env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
    : null;

export const corsConfig = cors({
    allowMethods: ["GET"],
    maxAge: 600,
    credentials: true,
    // If specific origins are configured, use them; otherwise allow all
    origin: allowedOrigins
        ? allowedOrigins
        : (origin) => origin || "*",
});
