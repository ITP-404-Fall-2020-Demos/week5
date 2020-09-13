import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Issues from "./Issues";
import CreateIssue from "./CreateIssue";

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

  return (
    <Router>
      <div className="container mt-3">
        <h1>Issues</h1>
        <Switch>
          <Route path="/" exact>
            <Issues issues={issues} labels={labels} />
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
