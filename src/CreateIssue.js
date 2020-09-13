import React from "react";
import IssueForm from "./IssueForm";
import { useHistory } from "react-router-dom";

export default function CreateIssue({ issues, labels, setIssues }) {
  const history = useHistory();

  function createIssue(title, labelId) {
    const newIssue = {
      id: issues.length,
      title,
      label: labelId,
    };

    setIssues(issues.concat(newIssue));

    history.push("/");
  }

  return (
    <>
      <div className="mt-3">
        <h3>Create Issue</h3>
        <IssueForm labels={labels} onSubmit={createIssue} />
      </div>
    </>
  );
}
