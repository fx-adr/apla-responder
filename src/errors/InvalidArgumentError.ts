
/**
 * An error thrown when arguments of a function are not valid.
 */
export default class InvalidArgumentError extends Error {
  constructor(message?: string) {
    super(message);
    // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = InvalidArgumentError.name; // stack traces display correctly now
  }
}
