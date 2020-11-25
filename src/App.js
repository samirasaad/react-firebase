import { Router } from "react-router-dom";
import history from "./routes/History";
import Routes from "./routes/Routes";
import "./App.scss";

const App = () => {
  return (
    <Router history={history}>
      {Routes}
    </Router>
  );
};

export default App;
