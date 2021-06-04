import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
function App() {
  const author = "Angular";
  const repository = "Angular-cli";
  return (
    <>
      <Header author={author} repository={repository} />
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <IssueList author={author} repository={repository} />
          </Route>
          <Route exact path={"issues/:issueNumber"}>
            <IssueDetail author={author} repository={repository} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
