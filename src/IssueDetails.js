import React from "react";
import { useParams, useHistory } from "react-router-dom";
import IssueForm from "./IssueForm";

export default function IssueDetails({
  issues,
  labels,
  deleteIssue,
  editIssue,
}) {
  const { id } = useParams();
  const history = useHistory();

  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });

  function handleDeleteButtonClick() {
    deleteIssue(issue);
    history.push("/");
  }

  function handleSubmit(title, labelId) {
    editIssue(issue.id, title, labelId);
    history.push("/");
  }

  return (
    <div>
      <IssueForm issue={issue} labels={labels} onSubmit={handleSubmit} />
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
