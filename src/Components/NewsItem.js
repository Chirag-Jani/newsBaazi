import React from "react";

function NewsItem(props) {
  return (
    <div>
      <div className="card m-2">
        <img src={props.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">
            {props.description}...
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ zIndex: "1", left: "90%" }}
            >
              {props.source.name}
            </span>
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author} on {new Date(props.date).toUTCString()}
            </small>
          </p>
          <a
            href={props.url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
