import Body from "./components/Body.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
