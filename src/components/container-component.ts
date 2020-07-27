import InflatedComponent from "../interfaces/InflatedComponentInterface";
import AbstractComponent from "./abstract-component";

export default abstract class ContainerComponent extends AbstractComponent {
  protected items: AbstractComponent[] = [];

  toObject(): InflatedComponent {
    const obj = super.toObject();
    const inflatedItems: InflatedComponent[] = [];

    this.items.forEach((component) => {
      inflatedItems.push(component.toObject());
    });

    obj.items = inflatedItems;

    return obj;
  }

  addItem(item: AbstractComponent) {
    this.items.push(item);
  }

  removeAll() {
    this.items = [];
  }
}