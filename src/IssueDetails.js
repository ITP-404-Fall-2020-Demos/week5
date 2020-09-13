import React from "react";
import { useParams } from "react-router-dom";

export default function IssueDetails({ issues }) {
  const { id } = useParams();

  const issue = issues.find((issue) => {
    return issue.id === Number(id);
  });

  return <div>{issue.title}</div>;
}
