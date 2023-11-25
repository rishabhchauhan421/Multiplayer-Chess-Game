import { app } from './app';

const port = process.env.PORT;

const startup = () => {
  app.listen(3000, () => {
    console.log('Listening to port 3000');
  });
};

startup();
