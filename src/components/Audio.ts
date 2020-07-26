class Audio extends AbstractComponent {
    type : string = "Audio";
    private sourceUrl : string = "";

    constructor(sourceUrl : string) {
        super();
        this.sourceUrl = sourceUrl;
    }

    toObject() {
        return {
            type: this.type,
            source: this.sourceUrl
        }
    }
}