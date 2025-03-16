import React, { useState } from "react";
import FormSection from "../components/FormSection";
import SocialMedia from "../components/SocialMedia";
import { extractAndConvert } from "../utils/helperFunctions";
import Profile from "../components/Profile";

function DataEntry({ data, setData }) {
  const [showProfile, setShowProfile] = useState(false);

  function handleChange(event) {
    const { name, value, files } = event.target;
    if (name.startsWith("platform") || name.startsWith("url")) {
      const index = extractAndConvert(name);

      setData((prevState) => {
        const updatedSocialMedia = [...prevState.socialMedia];
        updatedSocialMedia[index] = {
          ...updatedSocialMedia[index],
          [name]: value,
        };

        return { ...prevState, socialMedia: updatedSocialMedia };
      });
    } else if (name === "picture" || name === "profilePicture") {
      setData((prevState) => ({
        ...prevState,
        [name]: URL.createObjectURL(files[0]),
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowProfile(true);
    localStorage.setItem("profile", JSON.stringify(data));
    console.log(data);
  }

  return (
    <div>
      {showProfile ? (
        <Profile data={data} />
      ) : (
        <Form
          data={data}
          setData={setData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default DataEntry;

function Form({ data, setData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <FormSection sectionTitle={"Bio"}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={data?.name}
            onChange={handleChange}
            name="name"
            type="name"
            className="form-control"
            id="name"
            placeholder="Ahsan Javed"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <textarea
            name="bio"
            onChange={handleChange}
            className="form-control"
            id="bio"
            rows={3}
            defaultValue={""}
          />
        </div>
      </FormSection>
      <FormSection sectionTitle={"About Me"}>
        <div className="mb-3">
          <label htmlFor="profile-picture" className="form-label">
            Profile Picture
          </label>
          <input
            name="profilePicture"
            onChange={handleChange}
            className="form-control"
            type="file"
            id="profile-picture"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">
            Skills
          </label>
          <input
            name="skills"
            onChange={handleChange}
            type="name"
            className="form-control"
            id="skills"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="interests" className="form-label">
            Interests
          </label>
          <input
            name="interests"
            onChange={handleChange}
            type="name"
            className="form-control"
            id="interests"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="detailed-description" className="form-label">
            Detailed Description
          </label>
          <textarea
            name="detailedDescription"
            onChange={handleChange}
            className="form-control"
            id="detailed-description"
            rows={3}
            defaultValue={""}
          />
        </div>
      </FormSection>
      <FormSection sectionTitle={"Project Details"}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            name="title"
            onChange={handleChange}
            type="name"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            className="form-control"
            id="description"
            rows={3}
            defaultValue={""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="picture" className="form-label">
            Picture
          </label>
          <input
            name="picture"
            onChange={handleChange}
            className="form-control"
            type="file"
            id="picture"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="github-link" className="form-label">
            GitHub Link
          </label>
          <input
            name="gitHubLink"
            onChange={handleChange}
            type="name"
            className="form-control"
            id="github-link"
          />
        </div>
      </FormSection>
      <FormSection sectionTitle={"Social Media Links"}>
        {data?.socialMedia.map((sm, index) => (
          <SocialMedia
            data={sm}
            handleChange={handleChange}
            index={index}
            key={index}
          />
        ))}
        <div className="mb-3 d-grid">
          <button
            onClick={() =>
              setData((prevState) => ({
                ...prevState,
                socialMedia: [
                  ...prevState.socialMedia,
                  {
                    [`platform${prevState.socialMedia.length}`]: "",
                    [`url${prevState.socialMedia.length}`]: "",
                  },
                ],
              }))
            }
            className="btn btn-secondary"
            type="button"
          >
            Add Social Media
          </button>
        </div>
      </FormSection>
      <button className="btn btn-primary" type="submit">
        Generate
      </button>
    </form>
  );
}
