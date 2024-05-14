import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === "email") {
      if (!value.includes("@")) {
        setEmailError("Email is invalid");
      } else {
        setEmailError(false);
      }
    }

    if (id === "password") {
      const isValidPassword = validatePasswordStrength(value);
      if (!isValidPassword) {
        setPasswordError("Password not Strong.");
      } else {
        setPasswordError(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setEmailError(false);
      setPasswordError(false);
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        // Handle error response from server
        // For now, just displaying a generic error
        setEmailError("Something went wrong");
        setPasswordError("Something went wrong");
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setEmailError("Something went wrong");
      setPasswordError("Something went wrong");
    }
  };

  const validatePasswordStrength = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
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
        <h1 className="text-3xl text-center font-semibold mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="w-full border rounded-md py-2 px-3 mt-1"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              id="email"
              className={`w-full border rounded-md py-2 px-3 mt-1 ${
                emailError && "border-red-500"
              }`}
              onChange={handleChange}
            />
            {emailError && <p className="text-red-700">{emailError}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className={`w-full border rounded-md py-2 px-3 mt-1 ${
                passwordError && "border-red-500"
              }`}
              onChange={handleChange}
            />
            {passwordError && <p className="text-red-700">{passwordError}</p>}
          </div>
          <button
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Have an account?{" "}
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
