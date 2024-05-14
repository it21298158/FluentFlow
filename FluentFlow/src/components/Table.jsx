import axios from "axios";
import { useReactToPrint } from "react-to-print";
import React, { useEffect, useRef, useState } from "react";

export default function Table({ deleteUser, updateUser }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/backend/vocab/");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ComponentsRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => {
      const tableClone = ComponentsRef.current.cloneNode(true);
      const rows = tableClone.querySelectorAll("tr");
      rows.forEach((row) => {
        row.deleteCell(-1); // Delete the last cell (Action column)
      });
      return tableClone;
    },
    documentTitle: "Vocabulary Report",
    onAfterPrint: () => alert("Vocabulary Report Successfully Downloaded !"),
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/backend/vocab/delete/${id}`);
      fetchData(); // Fetch updated data after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`/backend/vocab/update/${id}`);
      fetchData(); // Fetch updated data after update
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`
          body {
            background-image: url('https://cdn.pixabay.com/photo/2018/03/06/19/33/nature-3204336_1280.jpg');
            background-size: cover;
            background-position: center;
            height: 100vh;
            margin: 0;
            padding: 0;
          }
          .table-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>

      {/* Include Material Icons CSS from CDN */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="container">
        <div className="table-wrapper" style={{ marginTop: "80px" }}>
          <div className="table-title">
            <div>
              <h2>
                <b>My Vocabulary list</b>
              </h2>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex items-center">
                <a
                  href="#"
                  className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center mr-2"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                  style={{ marginLeft: 0 }}
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <span>Add New Vocabulary</span>
                </a>
                <button
                  className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  data-bs-toggle="modal"
                  onClick={handlePrint}
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
          <table
            className="table table-striped table-hover custom-table"
            ref={ComponentsRef}
            style={{ marginTop: "20px" }}
          >
            <thead className="table-header">
              <tr>
                <th></th>
                <th>Vocabulary</th>
                <th>Definition</th>
                <th>Synonym</th>
                <th>Antonym</th>
                <th>Action</th> {/* New column header for actions */}
              </tr>
            </thead>
            <tbody className="table-body">
              {data.map((elem) => (
                <tr key={elem._id}>
                  <td></td>
                  <td>{elem.vocabulary}</td>
                  <td>{elem.definition}</td>
                  <td>{elem.synonym}</td>
                  <td>{elem.antonym}</td>
                  <td>
                    <a
                      href="#"
                      className="edit cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target="#editEmployeeModal"
                      onClick={() => handleUpdate(elem._id)}
                    >
                      <i
                        className="material-icons"
                        data-bs-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </a>
                    <a
                      href="#"
                      className="delete cursor-pointer ms-2"
                      onClick={() => handleDelete(elem._id)}
                    >
                      <i
                        className="material-icons"
                        data-bs-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
