import Filter from "./abstract-filter";
import InflatedFilter from "../interfaces/InflatedFilterInterface";
import InvalidArgumentError from "../errors/InvalidArgumentError";


export default class FadeIn extends Filter {
  type = "FadeIn";
  duration: number = 0;

  constructor(duration: number = 0) {
    super();
    if (duration < 0) {
      throw new InvalidArgumentError("duration must be positive");
    }
    this.duration = duration;
  }

  toObject(): InflatedFilter {
    const obj = super.toObject();
    obj.duration = this.duration;
    return obj;
  }
}