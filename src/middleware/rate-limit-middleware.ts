import { rateLimit } from "express-rate-limit";

export const rateLimitMiddleware = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 min in milliseconds
  max: 10,
  message: "Error, you have reached maximum retries. Please try again after 10 minutes", 
  statusCode: 429,
  headers: true,
});

