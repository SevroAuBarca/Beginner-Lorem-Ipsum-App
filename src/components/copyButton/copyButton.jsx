import React from "react";

export const CopyButton = ({ onCopy, flag }) => (
  <div className="copy-div">
    <button
      onClick={onCopy}
      className={flag ? "button button-copy" : "hide-button"}
    >
      Copiar
    </button>
  </div>
);
