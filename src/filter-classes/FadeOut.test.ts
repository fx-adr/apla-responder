import FadeOut from "./FadeOut";
import InvalidArgumentError from "../errors/InvalidArgumentError";

describe('FadeOut: Should set correct duration.', () => {
    const durations = [
        0, 1000, 3333
    ];

    durations.forEach((duration) => {
        test("Duration - " + duration + "ms", () => {
            const fadeIn = new FadeOut(duration);
            expect(fadeIn.toObject().duration).toBe(duration);
            expect(fadeIn.toObject().type).toEqual("FadeOut");
        });
    });

    test("And throw error when negative value", () => {
        expect(() => {
            new FadeOut(-1);
        }).toThrowError(InvalidArgumentError);

        expect(() => {
          new FadeOut(-1000);
        }).toThrowError(InvalidArgumentError);
    });

    durations.forEach((duration) => {
      test("Check structure  - " + duration + "ms", () => {
        const fadeIn = new FadeOut(duration);
        expect(fadeIn.toObject()).toEqual({
          type: "FadeOut",
          duration,
        });
      });
    });

    test("When false", () => {
      const duration = 362;
      const fadeIn = new FadeOut(duration);
      const when = false;
      fadeIn.setWhen(when);
      expect(fadeIn.toObject()).toEqual({
        type: "FadeOut",
        duration,
        when,
      });
    });

    test("Description is kept", () => {
      const description = "Fade in the sound.";
      const duration = 433;
      const fadeIn = new FadeOut(duration);
      const when = false;
      fadeIn.setWhen(when);
      fadeIn.setDescription(description);
      expect(fadeIn.toObject()).toEqual({
        type: "FadeOut",
        duration,
        description,
        when,
      });
    });
});