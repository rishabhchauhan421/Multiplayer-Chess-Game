import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import { errorHandler } from './middleware/error-handler';
import { SigninRouter } from './routes/auth/signin';
import { SignupRouter } from './routes/auth/signup';
import { SignoutRouter } from './routes/auth/signout';
import { CurrentUserRouter } from './routes/auth/current-user';

import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(SigninRouter);
app.use(SignupRouter);
app.use(SignoutRouter);
app.use(CurrentUserRouter);

app.all('*', async () => {
  throw new NotFoundError('Route not found');
});

app.use(errorHandler);

export { app };
