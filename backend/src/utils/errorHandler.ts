export class ErrorHandler extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message)
    this.name = 'ErrorHandler'
  }
}

export const handleError = (message: string, statusCode: number = 500) => {
  throw new ErrorHandler(message, statusCode)
}
