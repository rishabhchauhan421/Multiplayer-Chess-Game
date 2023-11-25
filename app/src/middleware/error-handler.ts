import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../errors/custom-error';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('error handled');
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.seralizeError() });
  }

  console.error(err);
  return res.status(404).send('Not Found Error');
}
