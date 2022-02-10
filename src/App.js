import React from "react";
import { LoremForm } from "./components/LoremFormSection/LoremForm/LoremForm";
import { LoremHeader } from "./components/LoremHeader/LoremHeader";
import { LoremformSection } from "./components/LoremFormSection/LoremFormSection";
import { LoremTextSection } from "./components/LoremTextSection/LoremTextSection";
import { LoremNav } from "./components/LoremHeader/LoremNav/LoremNav";
import { LoremTitle } from "./components/LoremHeader/LoremTitle/LoremTitle";
import { LoremArea } from "./components/LoremTextSection/LoremText/LoremArea";
import { useLorem } from "./utils/useLorem";
import { CopyButton } from "./components/copyButton/copyButton";

function App() {
  const {
    text,

    generatePharagraphs,
    copyClipboard,
    flag,
    setFlag,
  } = useLorem();

  return (
    <>
      <LoremHeader
        render={() => (
          <LoremNav>
            {" "}
            <LoremTitle title={"Lorem Generator"} />{" "}
          </LoremNav>
        )}
      />
      <LoremformSection
        render={() => (
          <LoremForm onGenerate={generatePharagraphs} setFlag={setFlag} />
        )}
      />
      <LoremTextSection text={text} render={() => <LoremArea text={text} />} />
      <CopyButton onCopy={copyClipboard} flag={flag} />
    </>
  );
}

export default App;
