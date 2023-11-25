import express, { Request, Response } from 'express';

const route = express.Router();

route.post('/api/chess/signin', async (req: Request, res: Response) => {});

export { route as SignupRouter };
