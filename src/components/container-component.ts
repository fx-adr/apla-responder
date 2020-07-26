abstract class ContainerComponent extends AbstractComponent {
  protected items: AbstractComponent[] = [];

  toObject(): InflatedComponent {
    const obj = super.toObject();
    obj.items = [];

    this.items.forEach((component) => {
      obj.items.push(component.toObject());
    });

    return obj;
  }
}