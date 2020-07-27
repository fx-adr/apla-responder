import FadeIn from "./FadeIn";

describe('Ensure FadeIn Filter response', () => {
    
    test("Durations", () => {
        const duration = 0;
        const fadeIn = new FadeIn(duration);
        expect(fadeIn.toObject().duration).toBe(duration);
    });
});