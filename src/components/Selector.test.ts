import Selector from "./Selector";
import Audio from "./Audio";
import Speech from "./Speech";

const type = "Selector";

describe("Selector component class", () => {
  const selector = new Selector();

  test("type is " + type, () => {
    expect(selector.toObject().type).toEqual(type);
  });

  test("Adds item ok, and normal default strategy", () => {
    const audio = new Audio("https://fxdigital.uk/");
    const audioInflated = audio.toObject();

    selector.addItem(audio);
    expect(selector.toObject().items).toBeDefined();
    expect(selector.toObject().items?.length).toEqual(1);
    expect(selector.toObject()).toEqual({
      type,
      strategy: "normal",
      items: [
        audioInflated
      ]
    });
  })

  test("Handles multiple items", () => {
    const selector = new Selector();

    const audio = new Audio("https://fxdigital.uk/");
    const speech = new Speech("hello there");
    const audioInflated = audio.toObject();
    const speechInflated = speech.toObject();

    selector.addItem(audio);
    selector.addItem(speech);

    expect(selector.toObject().items).toBeDefined();
    expect(selector.toObject().items?.length).toEqual(2);
    expect(selector.toObject()).toEqual({
      type,
      strategy: "normal",
      items: [audioInflated, speechInflated],
    });
  });


});