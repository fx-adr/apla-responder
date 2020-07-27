import Sequencer from "./Sequencer";
import Audio from "./Audio";
import Speech from "./Speech";

const type = "Sequencer";

describe("Mixer component class", () => {
  const mixer = new Sequencer();

  test("type is " + type, () => {
    expect(mixer.toObject().type).toEqual(type);
  });

  test("Adds item ok", () => {
    const audio = new Audio("https://fxdigital.uk/");
    const audioInflated = audio.toObject();

    mixer.addItem(audio);
    expect(mixer.toObject().items).toBeDefined();
    expect(mixer.toObject().items?.length).toEqual(1);
    expect(mixer.toObject()).toEqual({
      type,
      items: [
        audioInflated
      ]
    });
  })

  test("Handles multiple items", () => {
    const mixer = new Sequencer();

    const audio = new Audio("https://fxdigital.uk/");
    const speech = new Speech("hello there");
    const audioInflated = audio.toObject();
    const speechInflated = speech.toObject();

    mixer.addItem(audio);
    mixer.addItem(speech);

    expect(mixer.toObject().items).toBeDefined();
    expect(mixer.toObject().items?.length).toEqual(2);
    expect(mixer.toObject()).toEqual({
      type,
      items: [audioInflated, speechInflated],
    });
  });


});