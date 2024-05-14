import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddUser({ setData }) {
  const [value, setValue] = useState({
    vocabulary: "",
    definition: "",
    synonym: "",
    antonym: "",
  });

  const handleOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value, // Fixed target name
    });
  };

  const handleCloseModal = () => {
    setValue({
      vocabulary: "",
      definition: "",
      synonym: "",
      antonym: "",
    });
  };

  const CloseRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addVocab = await axios.post(
        "/backend/vocab/add", // Changed URL
        value
      );
      const response = addVocab.data;
      if (response.message === "Vocabulary Added") {
        toast.success(response.message);
        fetchData(); // Fetch updated data from backend
        handleCloseModal(); // Reset form fields
        CloseRef.current.click(); // Close modal
      } else {
        toast.error("Failed to add vocabulary");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add vocabulary");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/backend/vocab/"); // Changed URL
      setData(response.data); // Update table data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Vocabulary</h4>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                  onClick={handleCloseModal}
                  ref={CloseRef}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Vocabulary</label>
                  <input
                    type="text"
                    value={value.vocabulary}
                    name="vocabulary"
                    onChange={handleOnChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Definition</label>
                  <input
                    type="text"
                    value={value.definition}
                    name="definition"
                    onChange={handleOnChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Synonym</label>
                  <input
                    type="text"
                    value={value.synonym}
                    name="synonym"
                    onChange={handleOnChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Antonym</label>
                  <input
                    type="text"
                    value={value.antonym}
                    name="antonym"
                    onChange={handleOnChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <input type="submit" className="btn btn-primary" value="Add" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
