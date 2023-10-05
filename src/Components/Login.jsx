import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
const Login = () => {
  const { createRegister } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    createRegister(email, password)
      .then((result) => {
        console.log(result.user);
        {
          navigate?.state ? location.state : "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
        <div className=" ">
          <h1 className="text-5xl font-bold mb-5">Login now!</h1>

          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <p className="mt-2">
            Dont’t Have An Account ?
            <Link className="font-bold text-blue-800" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
