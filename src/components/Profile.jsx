function Profile({ data }) {
  return (
    <div className="card shadow-sm p-4">
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={data?.profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="rounded-circle img-fluid border"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <h2 className="fw-bold">{data?.name || "Your Name"}</h2>
          <p className="text-muted">{data?.bio || "Short bio goes here..."}</p>
          {data?.gitHubLink && (
            <a
              href={data?.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <i className="bi bi-github"></i> GitHub Profile
            </a>
          )}
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-md-6">
          <h4 className="fw-bold">Skills</h4>
          <p>{data?.skills || "No skills listed."}</p>
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Interests</h4>
          <p>{data?.interests || "No interests listed."}</p>
        </div>
      </div>

      <div className="mt-3">
        <h4 className="fw-bold">About Me</h4>
        <p>{data?.detailedDescription || "Write something about yourself..."}</p>
      </div>

      {data?.title && (
        <div className="mt-4">
          <h4 className="fw-bold">{data?.title}</h4>
          <p>{data?.description}</p>
          {data?.picture && (
            <img
              src={data?.picture}
              alt="Project"
              className="img-fluid rounded shadow"
            />
          )}
        </div>
      )}

      <div className="mt-4">
        <h4 className="fw-bold">Social Media</h4>
        <ul className="list-group">
          {data?.socialMedia.map((sm, index) => {
            const platformKey = `platform${index}`;
            const urlKey = `url${index}`;
            return (
              sm[urlKey] && (
                <li key={index} className="list-group-item">
                  <a
                    href={sm[urlKey]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {sm[platformKey] || "Social Media"}
                  </a>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
