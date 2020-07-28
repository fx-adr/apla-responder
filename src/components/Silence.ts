import InflatedComponent from "../interfaces/InflatedComponentInterface";
import AbstractComponent from "./abstract-component";
import InvalidArgumentError from "../errors/InvalidArgumentError";

export default class Silence extends AbstractComponent {
  type: string = "Silence";
  private duration: number = 0;

  /**
   * Add the sound of silence
   * @param duration Number of milliseconds for there to be silence.
   */
  constructor(duration: number) {
    super();

    if(duration < 0) {
      throw new InvalidArgumentError("Duration cannot be negative.");
    }

    this.duration = duration;
  }

  toObject(): InflatedComponent {
    const obj = super.toObject();
    obj.duration = this.duration;
    return obj;
  }
}