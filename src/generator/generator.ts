import type { HandlerInput, ResponseBuilder}  from "ask-sdk-core";
import AplaDocument from "../apla-documents/AplaDocument";
import AplaRenderDocument from "../interfaces/AplaRenderDocumentInterface";
import { library } from "../library";
import Sequencer from "../components/Sequencer";
import AbstractComponent from "../components/abstract-component";
import Audio from "../components/Audio";
import Speech from "../components/Speech";
import Silence from "../components/Silence";
import Mixer from "../components/Mixer";
import Selector from "../components/Selector";

export default class Generator {
  protected aplaDocument: AplaDocument = new AplaDocument();
  protected token: String | null = null;
  protected askResponseBuilder: ResponseBuilder;
  protected handlerInput: HandlerInput;

  constructor(handlerInput: HandlerInput, token?: String) {
    this.handlerInput = handlerInput;
    this.askResponseBuilder = this.handlerInput.responseBuilder;

    if (token) {
      this.token = token;
    } else {
      // use an opaque token, from the requestId
      this.token = handlerInput.requestEnvelope.request.requestId;
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

  useSelector(selectorItems: Selector): void;
  useSelector(selectorItems: Array<AbstractComponent>, strategy?: String): void;
  useSelector(selectorItems : Array<AbstractComponent>|Selector, strategy: String = "normal"): void {
      if(selectorItems instanceof Selector) {
        this.addItem(selectorItems);
      } else {
          const selector = new Selector(strategy);
          selectorItems.forEach(item => {
            selector.addItem(item);
          });

          this.addItem(selector);
      }
  }

  useSequencer(sequencerItems: Sequencer): void;
  useSequencer(sequencerItems: Array<AbstractComponent>): void;
  useSequencer(sequencerItems : Array<AbstractComponent>|Sequencer): void {
      if(sequencerItems instanceof Sequencer) {
        this.addItem(sequencerItems);
      } else {
          const sequencer = new Sequencer();
          sequencerItems.forEach(item => {
            sequencer.addItem(item);
          });

          this.addItem(sequencer);
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
