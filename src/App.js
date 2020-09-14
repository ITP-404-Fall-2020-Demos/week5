import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Issues from "./Issues";
import CreateIssue from "./CreateIssue";
import IssueDetails from "./IssueDetails";

function App() {
  const labels = [
    {
      id: 0,
      name: "bug",
      color: "red",
    },
    {
      id: 1,
      name: "documentation",
      color: "blue",
    },
    {
      id: 2,
      name: "question",
      color: "pink",
    },
  ];

  const [issues, setIssues] = useState([
    {
      id: 0,
      title: "Issue 0",
      label: 1,
    },
    {
      id: 1,
      title: "Issue 1",
      label: 2,
    },
    {
      id: 2,
      title: "Issue 2",
      label: 0,
    },
    {
      id: 3,
      title: "Issue 3",
      label: 2,
    },
  ]);

  const labelsById = {};

  labels.forEach((label) => {
    labelsById[label.id] = label;
  });

  function deleteIssue(deletedIssue) {
    const filteredIssues = issues.filter((issue) => {
      return issue.id !== deletedIssue.id;
    });

    setIssues(filteredIssues);
  }

  function editIssue(id, title, labelId) {
    let updatedIssues = issues.map((issue) => {
      if (id === issue.id) {
        return {
          id,
          title,
          label: labelId,
        };
      }

      return issue;
    });

    setIssues(updatedIssues);
  }

  return (
    <Router>
      <div className="container mt-3">
        <h1>Issues</h1>
        <Switch>
          <Route path="/" exact>
            <Issues issues={issues} labels={labels} labelsById={labelsById} />
          </Route>
          <Route path="/issues/:id">
            <IssueDetails
              issues={issues}
              labels={labels}
              deleteIssue={deleteIssue}
              editIssue={editIssue}
            />
          </Route>
          <Route path="/new">
            <CreateIssue
              issues={issues}
              setIssues={setIssues}
              labels={labels}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
