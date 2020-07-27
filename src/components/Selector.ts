class Selector extends ContainerComponent {
  type = "Selector";
  strategy: String = "normal";

  protected strategies: String[] = [
    "normal",
    "randomItem",
    "randomData",
    "randomItemRandomData",
  ];

  constructor(strategy: String = "normal") {
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