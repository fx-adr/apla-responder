import Silence from "./Silence";
import InvalidArgumentError from "../errors/InvalidArgumentError";

const type = "Silence";

describe("Silence component class", () => {
  const duration = 10;
  const silence = new Silence(duration);

  test("type is " + type, () => {
    expect(silence.toObject().type).toEqual(type);
  });

  test("duration is kept ", () => {
    expect(silence.toObject().duration).toEqual(duration);
  });

  test("structure", () => {
    expect(silence.toObject()).toEqual({
      type,
      duration
    })
  });

  test("Negative duration throws error", () => {
    expect(() => {
      new Silence(-666)
    }).toThrowError(InvalidArgumentError);
  });

});