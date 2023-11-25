import express, { Request, Response } from 'express';

const route = express.Router();

route.get('/api/chess/currentuser', async (req: Request, res: Response) => {});

export { route as CurrentUserRouter };
