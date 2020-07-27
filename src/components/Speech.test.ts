import Speech from "./Speech";

const type = "Speech";

describe("Silence component class", () => {
  const say1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const ssml1 = "<speak>" + say1 + "</speak>";

    const speech1 = new Speech(say1)
    const speech2 = new Speech(ssml1, "SSML")

    test("type is " + type, () => {
      expect(speech1.toObject().type).toEqual(type);
    });

    test("Structure of plain text", () => {
      expect(speech1.toObject()).toEqual({
        type,
        contentType: "PlainText",
        content: say1
      });
    })

    test("Structure of SSML", () => {
      expect(speech2.toObject()).toEqual({
        type,
        contentType: "SSML",
        content: ssml1
      });
    });

});