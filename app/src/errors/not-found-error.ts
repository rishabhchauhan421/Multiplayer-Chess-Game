import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  constructor(public msg: string) {
    super(msg);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  seralizeError() {
    return [{ message: 'Not Found Error' }];
  }
}
