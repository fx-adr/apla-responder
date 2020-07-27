class Silence extends AbstractComponent {
    type : string = "Silence";
    private duration : Number = 0;

    /**
     * Add the sound of silence
     * @param duration Number of milliseconds for there to be silence.
     */
    constructor(duration : Number) {
        super();
        this.duration = duration;
    }

    toObject(): InflatedComponent {
        const obj = super.toObject();
        obj.duration = this.duration;
        return obj;
    }
}