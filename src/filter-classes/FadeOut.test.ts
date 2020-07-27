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
});