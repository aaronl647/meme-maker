import React from "react";

export const Meme = ({ template, onClick }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img
            key={template.id}
            src={template.url}
            alt={template.meme}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};
