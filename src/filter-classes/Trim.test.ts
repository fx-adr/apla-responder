import Trim from "./Trim";

describe('Trim filter', () => {
    const trim = new Trim();
    const trim1 = new Trim(40);
    const trim2 = new Trim(40, 60);
    const trim3 = new Trim(40, null);

    test("Should have type: Trim", () => {
        expect(trim.toObject().type).toEqual("Trim");
        expect(trim1.toObject().type).toEqual("Trim");
        expect(trim2.toObject().type).toEqual("Trim");
        expect(trim3.toObject().type).toEqual("Trim");
    });

    test("Should have correct start time", () => {
        expect(trim.toObject().start).toEqual(0);
        expect(trim1.toObject().start).toEqual(40);
        expect(trim2.toObject().start).toEqual(40);
        expect(trim3.toObject().start).toEqual(40);
    });

    test("Should have correct end time", () => {
      expect(trim.toObject().end).not.toBeDefined()
      expect(trim1.toObject().end).not.toBeDefined();
      expect(trim2.toObject().end).toEqual(60);
      expect(trim3.toObject().end).not.toBeDefined();
    });
});