import InflatedFilter from "../interfaces/InflatedFilterInterface";
import Filter from "./abstract-filter";

export default class Trim extends Filter {
  type = "Trim";

  start: Number = 0;
  end: Number | null = null;

  constructor(start: Number = 0, end: Number | null = null) {
    super();
    this.start = start;
    this.end = end;
  }

  toObject(): InflatedFilter {
    const obj = super.toObject();
    obj.start = this.start;

    if(this.end) {
      obj.end = this.end;
    }

    return obj;
  }
}