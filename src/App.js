import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import Signup from "./login/singup";

import Signin from "./login/signin";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/signup" element={<Signup />}></Route> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
