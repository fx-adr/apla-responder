import InflatedComponent from "../interfaces/InflatedComponentInterface";
import ComponentBindVal from "../interfaces/ComponentBindValInterface";
export default abstract class AbstractComponent {
  abstract type: string;
  description: String = "";
  id: String = "";
  when: String | true | false = true;
  bind: ComponentBindVal[] = [];

  setDescription(description: string) {
    this.description = description;
  }

  toObject(): InflatedComponent {
    const obj: InflatedComponent = {
      type: this.type,
    };

    if(this.id) {
      obj.id = this.id;
    }

    if (this.description) {
      obj.description = this.description;
    }

    if (this.bind && this.bind.length > 0) {
      obj.bind = this.bind;
    }

    return obj;
  }
}
