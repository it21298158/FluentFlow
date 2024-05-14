import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/backend/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/home");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://png.pngtree.com/thumb_back/fw800/background/20231228/pngtree-vintage-texture-pattern-background-beautiful-brown-brick-wall-and-wood-floor-image_13922478.png")',
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-80 shadow-md rounded-md p-8">
        <h1 className="text-3xl text-center font-semibold mb-8">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full border rounded-md py-2 px-3 mt-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border rounded-md py-2 px-3 mt-1"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth /> {/* Assuming this is your "Continue with Google" button */}
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
        {error && (
          <p className="text-red-700 mt-4 text-center">
            {error.message || "Something went wrong!"}
          </p>
        )}
      </div>
    </div>
  );
}
