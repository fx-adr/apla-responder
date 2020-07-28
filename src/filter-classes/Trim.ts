import InflatedFilter from "../interfaces/InflatedFilterInterface";
import Filter from "./abstract-filter";

export default class Trim extends Filter {
  type = "Trim";

  start: number = 0;
  end: number | null = null;

  constructor(start: number = 0, end: number | null = null) {
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