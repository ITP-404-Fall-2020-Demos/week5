import React from "react";
import { useParams } from "react-router-dom";

export default function IssueDetails({ issues, labelsById }) {
  const { id } = useParams();

  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });

  const label = labelsById[issue.label];

  return (
    <div>
      <div>{issue.title}</div>
      <span
        className="badge badge-pill text-white"
        style={{ backgroundColor: label.color }}
      >
        {label.name}
      </span>
    </div>
  );
}
