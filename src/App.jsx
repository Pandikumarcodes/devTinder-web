import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
