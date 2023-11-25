import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  constructor(public msg: string) {
    super(msg);
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  seralizeError: () => [{ message: 'Database Connection Error' }];
}
