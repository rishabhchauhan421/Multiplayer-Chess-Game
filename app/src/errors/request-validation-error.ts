import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: any) {
    super('Request Validation Error');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  seralizeError() {
    return this.errors.map((e) => {
      return { message: e.seraliseError() };
    });
  }
}
