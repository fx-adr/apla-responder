import Volume from "./Volume";

describe('Volume filter', () => {
    const vol = new Volume();
    const vol1 = new Volume(1);
    const vol2 = new Volume(0);
    const vol3 = new Volume(0.25);
    const vol4 = new Volume("48%");
    const vol5 = new Volume("100%");
    const vol6 = new Volume("0%");

    const volumes = [
        vol, vol1, vol2, vol3, vol4, vol5, vol6
    ];

    test("Should have type Volume", () => {
        volumes.forEach(vol => {
            expect(vol.toObject().type).toEqual("Volume");
        });
    })

    test("Should set correct volume amounts.", () => {
        expect(vol.toObject().amount).toEqual(1);
        expect(vol1.toObject().amount).toEqual(1);
        expect(vol5.toObject().amount).toEqual(1);

        expect(vol2.toObject().amount).toEqual(0);
        expect(vol6.toObject().amount).toEqual(0);

        expect(vol3.toObject().amount).toEqual(0.25);
        expect(vol4.toObject().amount).toEqual("48%");
    });

    test("Structure check", () => {
        expect(vol3.toObject()).toEqual({
            type: "Volume",
            amount: 0.25
        })

        expect(vol4.toObject()).toEqual({
          type: "Volume",
          amount: "48%",
        });
    });

    test("Keeps description", () => {
        const description = "This is a test description.";
        vol3.setDescription(description);
        expect(vol3.toObject()).toEqual({
            type: "Volume",
            amount: 0.25,
            description
        });
    });
});