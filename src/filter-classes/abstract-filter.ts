import InflatedFilter from "../interfaces/InflatedFilterInterface";

export default abstract class Filter {
  protected abstract type: String;
  protected description: String = "";
  protected when: String | true | false = true;

  setDescription(description: String) {
    this.description = description;
  }

  setWhen(when: String | true | false) {
    this.when = when;
  }

  toObject(): InflatedFilter {
    const obj: InflatedFilter = {
      type: this.type,
      when: this.when,
    };

    if (this.description) {
      obj.description = this.description;
    }

    if (true === obj.when || "true" === obj.when) {
      delete obj.when;
    }

    return obj;
  }
}