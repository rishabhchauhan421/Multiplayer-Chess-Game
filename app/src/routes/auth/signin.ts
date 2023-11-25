import express, { Request, Response } from 'express';
import { BadRequestError } from '../../errors/bad-request-error';

const route = express.Router();

route.post('/api/chess/signin', (req: Request, res: Response) => {
  throw new BadRequestError('checking');
  return res.sendStatus(201);
});

export { route as SigninRouter };
