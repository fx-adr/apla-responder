import APLADocument from "./AplaDocument";
import Audio from "../components/Audio";
import Speech from "../components/Speech";
import { library } from "../library";

describe("APLA Document", () => {
    const aplaDocument = new APLADocument();
    const audioUrl = "https://fxdigital.uk";
    const speak = "wow";
    const audio = new Audio(audioUrl);
    const speech = new Speech(speak);

    test("Errors when there is 0 components.", () => {
        expect(() => {
            aplaDocument.toObject()
        }).toThrowError(RangeError);
    });

    test("Ok when there's at least 1 component.", () => {
        aplaDocument.addItem(audio);
        expect(() => {
            aplaDocument.toObject();
        }).not.toThrowError(RangeError);

        aplaDocument.addItem(speech);
        expect(() => {
          aplaDocument.toObject();
        }).not.toThrowError(RangeError);
    });

    test("General structure", () => {
        const inflated = aplaDocument.toObject();

        expect(inflated.type).toEqual(library.documentType);
        expect(inflated.version).toEqual(library.documentVersion);

        expect(inflated.mainTemplate.items.length).toBeGreaterThan(0);
        
        expect(inflated.mainTemplate.items[0].type).toEqual("Audio");
        expect(inflated.mainTemplate.items[1].type).toEqual("Speech");

        expect(inflated).toEqual({
          type: library.documentType,
          version: library.documentVersion,
          mainTemplate: {
              items: [
                  {
                      type: "Audio",
                      source: audioUrl
                  },
                  {
                      type: "Speech",
                      contentType: "PlainText",
                      content: speak
                  }
              ]
          }
        });
    });

    test("Keeps token and description", () => {
        const token = "this is a token";
        const description = "description";
        aplaDocument.setToken(token);
        aplaDocument.setDescription(description);

        expect(aplaDocument.toObject().token).toBeDefined();
        expect(aplaDocument.toObject().description).toBeDefined();
        expect(aplaDocument.toObject().token).toEqual(token);
        expect(aplaDocument.toObject().description).toEqual(description);
    });

});