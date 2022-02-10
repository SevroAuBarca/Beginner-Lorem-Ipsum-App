import React from "react";

export const LoremForm = ({ onGenerate, setFlag }) => {
  const [text, setText] = React.useState("");
  const onChange = (e) => {
    setText(e.target.value);
    //console.log(sentence);
  };

  const onCreate = (e) => {
    e.preventDefault();
    setFlag(true);
    text && onGenerate(Number(text));
  };
  return (
    <form onSubmit={onCreate} className="form">
      <input type="number" className="input" value={text} onChange={onChange} />
      <button type="submit" className="button">
        Generate
      </button>
    </form>
  );
};
