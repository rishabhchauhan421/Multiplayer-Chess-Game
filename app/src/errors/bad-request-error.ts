import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public msg: string) {
    super(msg);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  seralizeError() {
    return [{ message: this.msg }];
  }
}
