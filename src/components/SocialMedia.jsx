import React from "react";

function SocialMedia({ data, handleChange, index }) {
  return (
    <div className="mb-3 row">
      <div className="col col-3">
        <label htmlFor="platform" className="form-label">
          Name
        </label>
        <input value={data[`platform${index}`]} name={`platform${index}`} onChange={handleChange} type="name" className="form-control" id="platform" />
      </div>
      <div className="col col-9">
        <label htmlFor="url" className="form-label">
          URL
        </label>
        <input value={data[`url${index}`]} name={`url${index}`} onChange={handleChange} type="name" className="form-control" id="url" />
      </div>
    </div>
  );
}

export default SocialMedia;
