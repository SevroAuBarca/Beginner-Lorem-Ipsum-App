import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const useLorem = () => {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);

  const generatePharagraphs = (val) => {
    const arr = [];
    for (let index = 0; index < val; index++) {
      const gen = lorem.generateParagraphs(1);
      arr.push(gen);
    }
    //console.log(arr);
    setText(arr.join("\n"));
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(text);
    setFlag(false);
    setText("Copiado Exitosamente");
  };

  return {
    text,
    setText,
    generatePharagraphs,
    copyClipboard,
    flag,
    setFlag,
  };
};
