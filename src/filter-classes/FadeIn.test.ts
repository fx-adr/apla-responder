import FadeIn from "./FadeIn";
import InvalidArgumentError from "../errors/InvalidArgumentError";

describe('FadeIn: Should set correct duration.', () => {
    const durations = [
        0, 1000, 3333
    ];

    durations.forEach((duration) => {
        test("Duration - " + duration + "ms", () => {
            const fadeIn = new FadeIn(duration);
            expect(fadeIn.toObject().duration).toBe(duration);
            expect(fadeIn.toObject().type).toEqual("FadeIn");
        });
    });

    test("And throw error when negative value", () => {
        expect(() => {
            new FadeIn(-1);
        }).toThrowError(InvalidArgumentError);

        expect(() => {
          new FadeIn(-1000);
        }).toThrowError(InvalidArgumentError);
    });

    durations.forEach((duration) => {
        test("Check structure  - " + duration + "ms", () => {
          const fadeIn = new FadeIn(duration);
          expect(fadeIn.toObject()).toEqual({
              type: "FadeIn",
              duration
          });
        });
    });

    test("When false", () => {
        const duration = 362;
        const fadeIn = new FadeIn(duration);
        const when = false;
        fadeIn.setWhen(when);
        expect(fadeIn.toObject()).toEqual({
              type: "FadeIn",
              duration,
              when
          });
    })

    test("Description is kept", () => {
      const description = "Fade in the sound.";
      const duration = 433;
      const fadeIn = new FadeIn(duration);
      const when = false;
      fadeIn.setWhen(when);
      fadeIn.setDescription(description);
      expect(fadeIn.toObject()).toEqual({
        type: "FadeIn",
        duration,
        description,
        when,
      });
    });
});