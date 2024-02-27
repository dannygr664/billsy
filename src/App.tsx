import { Routes, Route } from "react-router-dom";
import { SignUp } from "./features/Authentication/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
