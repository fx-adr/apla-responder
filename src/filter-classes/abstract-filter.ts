import InflatedFilter from "../interfaces/InflatedFilterInterface";

export default abstract class Filter {
  protected abstract type: string;
  protected description: string = "";
  protected when: string | true | false = true;

  setDescription(description: string) {
    this.description = description;
  }

  setWhen(when: string | true | false) {
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