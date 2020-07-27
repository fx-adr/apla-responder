import Generator from "./generator/generator";
import Silence from "./components/Silence";
import Speech from "./components/Speech";
import Mixer from "./components/Mixer";

const generator = new Generator();

generator.playAudio("https://google.com");
generator.speak("<speak>Hello there!</speak>", "SSML");
generator.silence(500);
generator.speak("Welcome to the skill!");

generator.useMixer([new Silence(400), new Speech("hi there")]);

const mixer = new Mixer();
mixer.addItem(new Silence(200));
mixer.setDescription("Lol");
generator.useMixer(mixer);

console.log(generator.getDirective().document.mainTemplate.items[0].items);