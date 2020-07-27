import Generator from "./generator/Generator";
import Silence from "./components/Silence";
import Speech from "./components/Speech";
import Audio from "./components/Audio";
import Mixer from "./components/Mixer";
import Sequencer from "./components/Sequencer";
import Selector from "./components/Selector";

module.exports = {
    Components: {
        Silence,
        Speech,
        Audio,
        Mixer,
        Selector,
        Sequencer
    },
    AudioResponse: Generator
}