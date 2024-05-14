import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
} from "../redux/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/backend/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      toast.success("User is updated successfully!");
    } catch (error) {
      dispatch(updateUserFailure(error));
      toast.error("Something went wrong!");
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/backend/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/backend/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      //className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30"
      className="w-screen h-3000 flex items-center justify-center"
      //className="w-screen h-screen overflow-hidden relative fixed top-0 left-0 z-0"
      style={{
        backgroundImage: `url('https://wallpapers.com/images/hd/high-resolution-wood-background-ha3szoh0gta3kdb1.jpg')`,
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mt-40">
        {" "}
        {/* Increased mt to 40 for more margin-top */}
        <h1 className="text-3xl font-semibold mb-2 text-center">Profile</h1>
        <div className="flex justify-center mb-4">
          <div className="relative overflow-hidden rounded-full w-20 h-20">
            <input
              type="file"
              ref={fileRef}
              hidden
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="profile"
                className="w-full h-full object-contain"
              />
            )}
            <label htmlFor="fileInput">
              <img
                src={formData.profilePicture || currentUser.profilePicture}
                alt="profile"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => fileRef.current.click()}
              />
            </label>
            {imagePercent > 0 && imagePercent < 100 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold">
                {imagePercent}%
              </div>
            )}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-75 text-white font-bold">
                Error uploading image
              </div>
            )}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            defaultValue={currentUser.username}
            type="text"
            id="username"
            placeholder="Username"
            className="border rounded-md py-2 px-3"
            onChange={handleChange}
          />
          <input
            defaultValue={currentUser.email}
            type="text"
            id="email"
            placeholder="Email"
            className={`border rounded-md py-2 px-3 ${
              error && "border-red-500"
            }`}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border rounded-md py-2 px-3"
            onChange={handleChange}
          />
          <button className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:bg-blue-600 disabled:opacity-80">
            {loading ? "Loading..." : "Update"}
          </button>
        </form>
        <div className="flex justify-between mt-5">
          <span
            onClick={handleDeleteAccount}
            className="text-red-700 cursor-pointer"
          >
            Delete Account
          </span>
          <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
            Sign out
          </span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
