import InflatedComponent from "../interfaces/InflatedComponentInterface";
import InvalidArgumentError from "../errors/InvalidArgumentError";
import ContainerComponent from "./container-component";

export default class Selector extends ContainerComponent {
  type = "Selector";
  strategy: string = "normal";

  protected strategies: string[] = [
    "normal",
    "randomItem",
    "randomData",
    "randomItemRandomData",
  ];

  constructor(strategy: string = "normal") {
    super();
    if (this.strategies.includes(strategy)) {
      this.strategy = strategy;
    } else {
      throw new InvalidArgumentError("strategy is not a valid argument.");
    }
  }

  toObject(): InflatedComponent {
    const obj = super.toObject();
    obj.strategy = this.strategy;

    return obj;
  }
}