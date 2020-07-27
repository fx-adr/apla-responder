import Audio from "./Audio";

const type = "Audio";

describe("Audio component class", () => {
  const url = "https://fxdigital.uk/";
  const audio = new Audio(url);

  test("type is " + type, () => {
    expect(audio.toObject().type).toEqual(type);
  });

  test("source url is kept ", () => {
    expect(audio.toObject().source).toEqual(url);
  });

  test("structure", () => {
    expect(audio.toObject()).toEqual({
      type,
      source: url
    })
  });

});