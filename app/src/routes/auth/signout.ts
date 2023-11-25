import express, { Request, Response } from 'express';

const route = express.Router();

route.get('/api/chess/signout', async (req: Request, res: Response) => {});

export { route as SignoutRouter };
