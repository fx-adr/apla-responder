import InflatedFilter from "../interfaces/InflatedFilterInterface";
import Filter from "./abstract-filter";

export default class Volume extends Filter {
  type = "Volume";
  amount: Number | string = 1;

  constructor(amount: Number | string = 1) {
    super();
    this.amount = amount;
  }

  toObject(): InflatedFilter {
    const obj = super.toObject();
    obj.amount = this.amount;

    if("100%" == obj.amount) {
      obj.amount = 1;
    }

    if ("0%" == obj.amount) {
      obj.amount = 0;
    }

    return obj;
  }
}