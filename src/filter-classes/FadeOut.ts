import InflatedFilter from "../interfaces/InflatedFilterInterface";
import InvalidArgumentError from "../errors/InvalidArgumentError";
import Filter from "./abstract-filter";
export default class FadeOut extends Filter {
  type = "FadeOut";
  duration: Number = 0;

  constructor(duration: Number = 0) {
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