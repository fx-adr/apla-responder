import InflatedComponent from "../interfaces/InflatedComponentInterface";
import InvalidArgumentError from "../errors/InvalidArgumentError";
import AbstractComponent from "./abstract-component";

export default class Speech extends AbstractComponent {
  type: string = "Speech";
  private content: string = "";
  private contentType: string = "PlainText";

  private contentTypes: string[] = ["PlainText", "SSML"];

  /**
   * Add Alexa speech to speak in the response.
   * @param content What to say
   * @param contentType What format it's in.
   */
  constructor(content: string, contentType: string = "PlainText") {
    super();
    this.content = content;
    if (this.contentTypes.includes(contentType)) {
      this.contentType = contentType;
    } else {
      throw new InvalidArgumentError("Content type was not a valid argument.");
    }
  }

  setContentType(contentType: string) {
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