// Middleware to check if query is a valid integer that is non negative and less than 10000
import { Request, Response, NextFunction } from 'express';
import { isNullUndefined } from '../utils/is-nullUndefined';
import { isNumber } from '../utils/is-number';

export const idMiddleware = (req: Request, res: Response, next:NextFunction) => {
    const id = req.query.id;
    if (isNullUndefined(id)) {
        return res.status(400).send({ status: "bad-request", message: "id is undefined" });
    }

    if (!isNumber(id)) {
        return res.status(400).send({ status: "bad-request", message: "id is not a number" });
    }
  
    if (id < 0) {
        return res.status(400).send({ status: "bad-request", message: "id is negative" });
    }
    if (id > 10000) {
        return res.status(400).send({ status: "bad-request", message: "id is greater than 10000" });
    }
    next();
}
exports.idMiddleware = idMiddleware;