import React, { useState } from "react";
import Table from "../components/Table";
import AddUser from "../components/AddUser";
import UpdatedUser from "../components/UpdatedUser";
import DeletUser from "../components/DeleteUser";
import axios from "axios";
import toast from "react-hot-toast";

export default function UserTable() {
  const [userId, setUserId] = useState();
  const [updatedUserId, setUpdatedUserId] = useState();
  const [value, setValue] = useState({
    vocabulary: "",
    definition: "",
    synonym: "",
    antonym: "",
  });

  const deletuser = (userid) => {
    setUserId(userid);
  };

  const handleUserDelet = async () => {
    try {
      const DeletUser = await axios.delete(
        `http://localhost:3000/backend/vocab/delete/${userId}`
      );
      const response = DeletUser.data;
      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const UpadteUserData = (Updatedid) => {
    setUpdatedUserId(Updatedid);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const UpdatedUser = await axios.put(
        `http://localhost:3000/backend/vocab/update/${updatedUserId}`,
        value
      );
      const response = UpdatedUser.data;

      if (response.success) {
        toast.success(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table Deletuser={deletuser} UpdatedUser={UpadteUserData} />
      <AddUser />
      <UpdatedUser
        handleOnSubmit={handleOnSubmit}
        value={value}
        handleChange={handleChange}
      />
      <DeletUser handleUserDelet={handleUserDelet} />
    </>
  );
}
