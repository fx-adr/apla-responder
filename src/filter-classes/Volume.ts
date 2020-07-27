import InflatedFilter from "../interfaces/InflatedFilterInterface";
import Filter from "./abstract-filter";

export default class Volume extends Filter {
  type = "Volume";
  amount: Number | String = 1;

  constructor(amount: Number | String = 1) {
    super();
    this.amount = amount;
  }

  toObject(): InflatedFilter {
    const obj = super.toObject();
    obj.amount = this.amount;
    return obj;
  }
}