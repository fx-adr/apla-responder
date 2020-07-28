import { library } from "../library";
import AbstractComponent from "../components/abstract-component";
import InflatedAplaDocument from "../interfaces/InflatedAplaDocumentInterface";

export default class AplaDocument {
  protected type: string = library.documentType;
  protected version: string = library.documentVersion;
  protected description: string|null = null;
  protected items: AbstractComponent[] = [];

  setDescription(description: string) {
      this.description = description;
  }

  removeItems() {
      this.items = [];
  }

  getRootItem() {
      return this.items[0];
  }

  addItem(item: AbstractComponent) {
      this.items.push(item);
  }

  toObject(): InflatedAplaDocument {
    const doc: InflatedAplaDocument = {
        type: this.type,
        version: this.version,
        mainTemplate: {
            items: []
        }
    };

    if(this.description) {
        doc.description = this.description;
    }

    if(0 == this.items.length) {
        throw new RangeError("The APLA document did not have any components assigned.");
    }

    this.items.forEach(item => {
        doc.mainTemplate.items.push(item.toObject());
    });

    return doc;
  }
}