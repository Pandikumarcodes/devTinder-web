import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./componenets/Body";
import Navbar from "./componenets/Navbar";
import Feed from "./componenets/Feed";
import Login from "./componenets/Login";
import Profile from "./componenets/Profile";
import appStore from "./utils/appStore";

import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="feed" element={<Feed />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
