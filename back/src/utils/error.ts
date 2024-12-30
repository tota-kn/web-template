export class StatusError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export class ValidationError extends StatusError {
  constructor(message: string) {
    super(400, `ValidationError: ${message}`);
  }
}
