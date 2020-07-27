class Speech extends AbstractComponent {
  type: string = "Speech";
  private content: String = "";
  private contentType: String = "PlainText";

  private contentTypes: String[] = ["PlainText", "SSML"];

  /**
   * Add Alexa speech to speak in the response.
   * @param content What to say
   * @param contentType What format it's in.
   */
  constructor(content: String, contentType: String = "PlainText") {
    super();
    this.content = content;
    if (this.contentTypes.includes(contentType)) {
      this.contentType = contentType;
    } else {
        throw new InvalidArgumentError("Content type was not a valid argument.");
    }
  }

  setContentType(contentType: String) {
    if (this.contentTypes.includes(contentType)) {
      this.contentType = contentType;
    } else {
        throw new InvalidArgumentError("Content type was not a valid argument.");
    }
  }

  toObject(): InflatedComponent {
    const obj = super.toObject();
    obj.content = this.content;
    obj.contentType = this.contentType;

    return obj;
  }
}