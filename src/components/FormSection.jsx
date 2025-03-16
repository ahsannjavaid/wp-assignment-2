import React from "react";

function FormSection({ sectionTitle, children }) {
  return (
    <div className="pb-3">
      <h3>{sectionTitle}</h3>
      <div className="card shadow-sm">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default FormSection;
