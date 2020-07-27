import AplaDocument from "../apla-documents/AplaDocument";
import AplaRenderDocument from "../interfaces/AplaRenderDocumentInterface";
import { library } from "../library";
import Sequencer from "../components/Sequencer";
import AbstractComponent from "../components/abstract-component";
import Audio from "../components/Audio";
import Speech from "../components/Speech";
import Silence from "../components/Silence";
import Mixer from "../components/Mixer";

export default class Generator {
  protected aplaDocument: AplaDocument = new AplaDocument();
  protected token: String | null = null;

  constructor(token?: String) {
    if (token) {
      this.token = token;
    }

    // add root sequencer element
    this.aplaDocument.addItem(new Sequencer());
    this.getRootItem().when = true;
  }

  protected getRootItem(): AbstractComponent {
    return this.aplaDocument.getRootItem();
  }

  protected removeAllItems() {
    this.aplaDocument.removeItems();
    // Reset the APLA document for a sequencer at the root.
    this.aplaDocument.addItem(new Sequencer());
  }

  playAudio(source: string): void;
  playAudio(source: Audio): void;
  playAudio(source: string | Audio): void {
    if (source instanceof Audio) {
      this.addItem(source);
    } else {
      this.addItem(new Audio(source));
    }
  }

  speak(phrase: string, format?: String): void;
  speak(phrase: Speech): void;
  speak(phrase: String | Speech, format: String = "PlainText"): void {
    if (phrase instanceof Speech) {
      this.addItem(phrase);
    } else {
      this.addItem(new Speech(phrase, format));
    }
  }

  silence(duration: Number) {
    this.addItem(new Silence(duration));
  }

  useMixer(mixerItems: Mixer): void;
  useMixer(mixerItems: Array<AbstractComponent>): void;
  useMixer(mixerItems: Array<AbstractComponent> | Mixer): void {
    if (mixerItems instanceof Mixer) {
      this.addItem(mixerItems);
    } else {
      const mixer = new Mixer();
      mixerItems.forEach((item) => {
        mixer.addItem(item);
      });
      this.addItem(mixer);
    }
  }

  protected addItem(item: AbstractComponent) {
    const rootItem = this.getRootItem();

    if (rootItem instanceof Sequencer) {
      rootItem.addItem(item);
    } else {
      throw new Error(
        "Root element of the APLA document is no longer a Sequencer."
      );
    }
  }

  getDirective(): AplaRenderDocument {
    const datasources = {};

    const directive: AplaRenderDocument = {
      type: library.renderAplaDocumentDirectiveType,
      document: this.aplaDocument.toObject(),
      datasources,
    };

    if (this.token) {
      directive.token = this.token;
    }

    return directive;
  }
}
