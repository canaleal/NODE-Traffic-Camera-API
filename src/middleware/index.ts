import { Request, Response, NextFunction } from 'express';

export function accessLog(req: Request, res: Response, next: NextFunction): void {
  const { hostname, method, path, ip, protocol } = req;
  console.log(`ACCESS: ${method} ${protocol}://${hostname}${path} - ${ip}`);
  next();
}

export function errorLog(err: Error, req: Request, res: Response): void {
  const { hostname, method, path, protocol } = req;
  console.log(`ERROR: ${method} ${protocol}://${hostname}${path} - ${err}`);
  // next(); // you can call either next or send a uniform error response
  res.status(500).send({ status: "server-error", message: err.message });
}
