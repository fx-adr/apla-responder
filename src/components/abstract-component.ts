abstract class AbstractComponent {
  abstract type: string;
  description: String = "";
  id: String = "";
  when: String | true | false = true;
  bind: ComponentBindVal[] = [];

  setDescription(description: string) {
    this.description = description;
  }

  toObject(): InflatedComponent {
    const obj = {
      type: this.type,
      description: this.description ?? "",
      id: this.id ?? "",
      bind: this.bind ?? []
    };

    return obj;
  }
}
