import React from "react";
import { useParams, useHistory } from "react-router-dom";

export default function IssueDetails({ issues, labelsById, deleteIssue }) {
  const { id } = useParams();
  const history = useHistory();

  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });

  const label = labelsById[issue.label];

  function handleDeleteButtonClick() {
    deleteIssue(issue);
    history.push("/");
  }

  return (
    <div>
      <div>{issue.title}</div>
      <span
        className="badge badge-pill text-white"
        style={{ backgroundColor: label.color }}
      >
        {label.name}
      </span>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteButtonClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
