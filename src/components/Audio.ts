class Audio extends AbstractComponent {
  type: string = "Audio";
  private sourceUrl: string = "";

  constructor(sourceUrl: string) {
    super();
    this.sourceUrl = sourceUrl;
  }

  toObject(): InflatedComponent {
    const obj = super.toObject();
    obj.source = this.sourceUrl;
    return obj;
  }
}