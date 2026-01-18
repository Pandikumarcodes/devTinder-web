import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant.js";
const Login = () => {
  const [emailID, setEmailId] = useState("Pandiyaan@74gmail.com");
  const [password, setPassword] = useState("Pandi@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailID: emailID,
          password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res?.data?.message));
      navigate("/feed");
      // console.log("Login success:", res?.data);
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body gap-4">
          <h2 className="card-title justify-center">Login</h2>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text pb-2">Email ID</span>
            </label>
            <input
              type="email"
              value={emailID}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your Email ID"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text pb-2">Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Centered Button */}
          <div className="flex justify-center mt-4">
            <button className="btn btn-primary  max-w-xs" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
