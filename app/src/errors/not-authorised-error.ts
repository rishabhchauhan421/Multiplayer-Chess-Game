import { CustomError } from './custom-error';
export class NotAuthorisedError extends CustomError {
  statusCode = 401;

  constructor(public msg: string) {
    super(msg);
    Object.setPrototypeOf(this, NotAuthorisedError.prototype);
  }

  seralizeError: () => [{ message: 'Not Authorised Error' }];
}
